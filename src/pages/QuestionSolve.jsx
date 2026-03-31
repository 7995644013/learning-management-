import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getQuestionById } from '../data/questions';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';
import './QuestionSolve.css';

export default function QuestionSolve() {
  const { id } = useParams();
  const question = getQuestionById(id);
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (question) {
      setCode(question.defaultCode[language] || '');
      setOutput('');
    }
  }, [question, language]);

  if (!question) return <div className="container" style={{padding: '3rem 0'}}>Question not found</div>;

  const runTests = async () => {
    setLoading(true);
    setOutput('Running isolated test cases...');
    
    let evalCode = code;
    if (language === 'javascript') {
      evalCode += `
// --- Test Evaluator (Do not edit) ---
const tests = ${JSON.stringify(question.testCases)};
let passedCount = 0;
for (const t of tests) {
  try {
    const res = String(eval(\`${question.functionName}(\${t.input})\`));
    if (res.toLowerCase() === t.expectedOutput.toLowerCase() || res === t.expectedOutput) {
       passedCount++;
       console.log("✅ Test passed: args(" + t.input + ") -> " + res);
    } else {
       console.log("❌ Test failed: args(" + t.input + "). Expected " + t.expectedOutput + " but got " + res);
    }
  } catch (e) {
    console.log("❌ Test error on args(" + t.input + "): " + e.message);
  }
}
console.log("\\n" + passedCount + " / " + tests.length + " tests passed!");
`;
    } else if (language === 'python') {
      evalCode += `\n
# --- Test Evaluator (Do not edit) ---
import json
tests = json.loads('${JSON.stringify(question.testCases)}')
passed = 0
for t in tests:
    try:
        res = str(eval(f"${question.functionName}({t['input']})")).lower()
        exp = str(t['expectedOutput']).lower()
        if res == exp or res == t['expectedOutput']:
            passed += 1
            print(f"✅ Test passed: args({t['input']}) -> {res}")
        else:
            print(f"❌ Test failed: args({t['input']}). Expected {t['expectedOutput']} but got {res}")
    except Exception as e:
        print(f"❌ Test error on args({t['input']}): {e}")
print(f"\\n{passed} / {len(tests)} tests passed!")
`;
    }

    try {
      const resp = await fetch('http://localhost:3001/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, sourceCode: evalCode })
      });
      const data = await resp.json();
      if (data.run) {
        setOutput(data.run.stdout + (data.run.stderr ? '\\n' + data.run.stderr : ''));
      } else {
        setOutput(data.error || 'Execution failed');
      }
    } catch (err) {
      setOutput(String(err));
    }
    setLoading(false);
  };

  return (
    <div className="solve-page container">
      <div className="solve-header">
        <Link to="/questions" className="back-link">← Back to Bank</Link>
        <h2>{question.title}</h2>
        <span className={`diff-badge ${question.difficulty.toLowerCase()}`}>{question.difficulty}</span>
      </div>
      
      <div className="solve-layout">
        <div className="solve-left">
          <div className="problem-card">
            <h3>Description</h3>
            <p style={{whiteSpace: 'pre-wrap'}}>{question.description}</p>
            <h3 style={{marginTop: '2rem'}}>Test Cases</h3>
            <div className="test-cases">
              {question.testCases.map((tc, idx) => (
                <div key={idx} className="test-case">
                  <div className="label">Input:</div> <div className="value">{tc.input}</div>
                  <div className="label">Expected Output:</div> <div className="value">{tc.expectedOutput}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="solve-right">
          <div className="editor-card" style={{display: 'flex', flexDirection: 'column'}}>
            <div className="editor-toolbar">
              <select value={language} onChange={e => setLanguage(e.target.value)}>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
              </select>
              <button className="btn btn-primary small" onClick={runTests} disabled={loading}>
                {loading ? 'Running...' : 'Run Tests ▶'}
              </button>
            </div>
            <div className="solve-editor-scroller" style={{flex: 1, overflow: 'auto', background: '#0c0c12', minHeight: '300px'}}>
              <Editor
                value={code}
                onValueChange={setCode}
                highlight={codeText => Prism.highlight(codeText, Prism.languages[language] || Prism.languages.javascript, language)}
                padding={15}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 14,
                  minHeight: '100%',
                  width: '100%',
                  backgroundColor: 'transparent'
                }}
                textareaClassName="editor-textarea"
              />
            </div>
            <div className="output-panel">
              <div className="output-header">Test Output</div>
              <pre className="output-body">{output || 'Click Run Tests to evaluate your code.'}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
