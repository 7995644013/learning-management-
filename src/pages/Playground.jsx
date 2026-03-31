import { useState } from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/themes/prism-tomorrow.css'
import './Playground.css'

const defaultJs = '// Type your JavaScript code here\n'
const defaultPython = '# Type your Python code here\n'
const defaultCpp = '// Type your C++ code here\n'
const defaultJava = '// Type your Java code here\n'

const defaultHtml = '<!-- Type your HTML here -->\n'
const defaultCss = '/* Type your CSS here */\n'
const defaultClientJs = '// Type JavaScript that runs in the preview here\n'

const getLanguageDefault = (lang) => {
  switch(lang) {
    case 'javascript': return defaultJs;
    case 'python': return defaultPython;
    case 'c++': return defaultCpp;
    case 'java': return defaultJava;
    default: return '';
  }
}

const getFileExtension = (lang) => {
  switch(lang) {
    case 'javascript': return 'js';
    case 'python': return 'py';
    case 'c++': return 'cpp';
    case 'java': return 'java';
    default: return 'txt';
  }
}

const getPrismLang = (lang) => {
  switch(lang) {
    case 'javascript': return 'javascript';
    case 'python': return 'python';
    case 'c++': return 'cpp';
    case 'java': return 'java';
    default: return 'javascript';
  }
}

export default function Playground() {
  const [mode, setMode] = useState('js')
  const [language, setLanguage] = useState('javascript')
  const [sourceCode, setSourceCode] = useState(defaultJs)
  
  const [htmlCode, setHtmlCode] = useState(defaultHtml)
  const [cssCode, setCssCode] = useState(defaultCss)
  const [clientJsCode, setClientJsCode] = useState(defaultClientJs)
  
  const [jsOutput, setJsOutput] = useState('')
  const [error, setError] = useState('')
  const [frameSrcDoc, setFrameSrcDoc] = useState('')

  const handleLanguageChange = (e) => {
    const newLang = e.target.value
    setLanguage(newLang)
    setSourceCode(getLanguageDefault(newLang))
    setJsOutput('')
    setError('')
  }

  const handleSave = () => {
    let content = '';
    let filename = '';
    
    if (mode === 'js') {
      content = sourceCode;
      filename = `code.${getFileExtension(language)}`;
    } else {
      content = `<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <style>\n${cssCode}\n    </style>\n  </head>\n  <body>\n    ${htmlCode}\n    <script>\n${clientJsCode}\n    </script>\n  </body>\n</html>`;
      filename = 'index.html';
    }
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  const runCode = async () => {
    setJsOutput('Running...');
    setError('');
    
    try {
      const resp = await fetch('http://localhost:3001/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: language,
          sourceCode: sourceCode
        })
      });
      const data = await resp.json();
      if (data.run) {
        setJsOutput(data.run.stdout + (data.run.stderr ? '\n' + data.run.stderr : ''));
      } else {
        setError(data.message || 'Execution error');
      }
    } catch (err) {
      setError(String(err));
    }
  }

  const runHtmlCssJs = () => {
    const src = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>${cssCode}</style>
  </head>
  <body>
    ${htmlCode}
    <script>
${clientJsCode}
    </script>
  </body>
</html>`
    setFrameSrcDoc(src)
  }

  const editorStyles = {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 14,
    minHeight: '100%',
    width: '100%',
    backgroundColor: 'transparent'
  }

  return (
    <div className="playground-page">
      <div className="container">
        <header className="page-header">
          <h1>Code Playground</h1>
          <p>Run code in multiple languages or preview HTML/CSS/JS instantly.</p>
        </header>

        <div className="playground-tabs">
          <button
            type="button"
            className={mode === 'js' ? 'active' : ''}
            onClick={() => setMode('js')}
          >
            Compiler
          </button>
          <button
            type="button"
            className={mode === 'web' ? 'active' : ''}
            onClick={() => setMode('web')}
          >
            HTML / CSS / JS preview
          </button>
        </div>

        {mode === 'js' ? (
          <section className="playground-grid">
            <div className="playground-editor code-container">
              <div className="playground-toolbar">
                <select className="language-select" value={language} onChange={handleLanguageChange}>
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="c++">C++</option>
                  <option value="java">Java</option>
                </select>
                <div className="toolbar-actions">
                  <button type="button" className="btn-secondary" onClick={handleSave}>
                    Save ⬇
                  </button>
                  <button type="button" onClick={runCode}>
                    Run ▶
                  </button>
                </div>
              </div>
              <div className="editor-scroller">
                <Editor
                  value={sourceCode}
                  onValueChange={setSourceCode}
                  highlight={code => Prism.highlight(code, Prism.languages[getPrismLang(language)] || Prism.languages.javascript, getPrismLang(language))}
                  padding={15}
                  style={editorStyles}
                  textareaClassName="editor-textarea"
                />
              </div>
            </div>
            <div className="playground-output">
              <div className="playground-toolbar">
                <span>Output</span>
              </div>
              <pre className="output-box">
{jsOutput || '// Execution results appear here'}
              </pre>
              {error && (
                <pre className="error-box">
{error}
                </pre>
              )}
            </div>
          </section>
        ) : (
          <section className="playground-grid web-mode">
            <div className="playground-editor-columns">
              <div className="playground-editor code-container">
                <div className="playground-toolbar">
                  <span>HTML</span>
                </div>
                <div className="editor-scroller">
                  <Editor
                    value={htmlCode}
                    onValueChange={setHtmlCode}
                    highlight={code => Prism.highlight(code, Prism.languages.markup, 'markup')}
                    padding={15}
                    style={editorStyles}
                    textareaClassName="editor-textarea"
                  />
                </div>
              </div>
              <div className="playground-editor code-container">
                <div className="playground-toolbar">
                  <span>CSS</span>
                </div>
                <div className="editor-scroller">
                  <Editor
                    value={cssCode}
                    onValueChange={setCssCode}
                    highlight={code => Prism.highlight(code, Prism.languages.css, 'css')}
                    padding={15}
                    style={editorStyles}
                    textareaClassName="editor-textarea"
                  />
                </div>
              </div>
              <div className="playground-editor code-container">
                <div className="playground-toolbar">
                  <span>Client JS</span>
                </div>
                <div className="editor-scroller">
                  <Editor
                    value={clientJsCode}
                    onValueChange={setClientJsCode}
                    highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
                    padding={15}
                    style={editorStyles}
                    textareaClassName="editor-textarea"
                  />
                </div>
              </div>
            </div>
            <div className="playground-output">
              <div className="playground-toolbar">
                <span>Preview</span>
                <div className="toolbar-actions">
                  <button type="button" className="btn-secondary" onClick={handleSave}>
                    Save ⬇
                  </button>
                  <button type="button" onClick={runHtmlCssJs}>
                    Run ▶
                  </button>
                </div>
              </div>
              <div className="frame-wrap">
                <iframe title="Preview" srcDoc={frameSrcDoc} />
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
