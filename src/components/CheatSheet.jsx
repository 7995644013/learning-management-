import { useState } from 'react'
import { getCheatSheetForModule } from '../data/cheatSheets'
import './CheatSheet.css'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button type="button" className="cheatsheet-copy" onClick={copy} title="Copy code">
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  )
}

export default function CheatSheet({ moduleId }) {
  const data = getCheatSheetForModule(moduleId)
  if (!data) return null

  return (
    <section className="cheatsheet" aria-labelledby="cheatsheet-title">
      <div className="cheatsheet-header">
        <span className="cheatsheet-badge">Topic cheat sheet</span>
        <h2 id="cheatsheet-title" className="cheatsheet-title">{data.title}</h2>
        <p className="cheatsheet-desc">Quick reference for this topic. Use it while coding.</p>
      </div>
      <div className="cheatsheet-sections">
        {data.sections.map((section, idx) => (
          <div key={idx} className="cheatsheet-section">
            <h3 className="cheatsheet-section-title">{section.heading}</h3>
            <ul className="cheatsheet-points">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {section.code && (
              <div className="cheatsheet-code-wrap">
                <CopyButton text={section.code} />
                <pre className="cheatsheet-code">
                  <code>{section.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
