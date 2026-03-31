import { useState } from 'react'
import './DoubtChat.css'

// #region agent log
const __DBG_ENDPOINT__ =
  'http://127.0.0.1:7612/ingest/c1112758-bd19-4395-ad2f-7654233b4714'
const __DBG_SESSION_ID__ = '866f53'
function __dbg__(payload) {
  fetch(__DBG_ENDPOINT__, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': __DBG_SESSION_ID__ },
    body: JSON.stringify({ sessionId: __DBG_SESSION_ID__, timestamp: Date.now(), ...payload }),
  }).catch(() => {})
}
// #endregion agent log

const seedMessages = [
  {
    role: 'assistant',
    text: 'Hi! I am Galaxy, your AI doubt assistant. Ask me coding/DSA doubts, concepts from lessons, or how to use features on this site.',
  },
]

// Fallback when the API is unavailable – website navigation helper
function fallbackAnswer(question) {
  const q = question.toLowerCase()

  // Navigation and sections
  if (q.includes('course') || q.includes('learn')) {
    return 'You can browse all learning programs from the "Courses" section in the top navigation. Click "Courses" to see the list, then pick a course to view its lessons, quizzes, and practice.'
  }

  if (q.includes('home') || q.includes('start')) {
    return 'To return to the main page, click "Home" in the top navigation. From there you can see featured programs and quick stats.'
  }

  if (q.includes('playground') || q.includes('code')) {
    return 'To practice coding, use the "Playground" link in the top navigation. It lets you experiment with code alongside your lessons.'
  }

  if (q.includes('quiz') || q.includes('test') || q.includes('assessment')) {
    return 'Open a course from the "Courses" page, then look for the Quiz option for that course to test your understanding.'
  }

  if (q.includes('practice') || q.includes('problems') || q.includes('exercises')) {
    return 'Each course has a Practice section. Go to "Courses", choose a course, then select the Practice option to solve problems.'
  }

  if (q.includes('doubt') || q.includes('ai') || q.includes('assistant') || q.includes('chat')) {
    return 'You are already on the AI assistant page. Type your question in the box below and press Send, and I (Galaxy) will guide you.'
  }

  if (q.includes('support') || q.includes('contact') || q.includes('help')) {
    return 'I’m Galaxy, the website assistant. I don\'t have a dedicated support page to point you to yet, but you can explore the Home and Courses sections for more details, and keep using this assistant for help.'
  }

  // Default fallback
  return 'I’m Galaxy, the website assistant. I don\'t have that exact information yet, but I can help guide you. Try asking about "courses", "playground", "quizzes", or "practice", or tell me what you want to do on this site.'
}

export default function DoubtChat() {
  const [messages, setMessages] = useState(seedMessages)
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)

  const send = async (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || isThinking) return

    __dbg__({
      runId: 'pre-fix',
      hypothesisId: 'H2',
      location: 'DoubtChat.jsx:send:entry',
      message: 'send invoked',
      data: { textLen: text.length, existingMessages: messages.length },
    })

    const userMsg = { role: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsThinking(true)

    try {
      const apiMessages = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.text,
      }))

      const res = await fetch('/api/galaxy-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })

      __dbg__({
        runId: 'pre-fix',
        hypothesisId: 'H2',
        location: 'DoubtChat.jsx:send:fetch-return',
        message: 'fetch returned',
        data: { ok: res.ok, status: res.status },
      })

      let data
      try {
        data = await res.json()
      } catch {
        const msg =
          'Galaxy could not read a response from the server. Make sure the backend is running (`npm run server`) and that you opened the site via the Vite dev server (`npm run dev`).'
        setMessages((prev) => [...prev, { role: 'assistant', text: msg }])
        return
      }

      if (!res.ok) {
        const errorText =
          typeof data?.error === 'string' && data.error.trim()
            ? data.error
            : `Galaxy server error (${res.status}).`
        setMessages((prev) => [...prev, { role: 'assistant', text: errorText }])
        return
      }

      if (res.ok && data?.reply?.content) {
        const replyText = typeof data.reply.content === 'string'
          ? data.reply.content
          : Array.isArray(data.reply.content)
            ? data.reply.content.map((c) => c.text || c).join(' ')
            : ''
        if (replyText) {
          __dbg__({
            runId: 'pre-fix',
            hypothesisId: 'H3',
            location: 'DoubtChat.jsx:send:got-reply',
            message: 'received reply content',
            data: { replyLen: replyText.length },
          })
          setMessages((prev) => [...prev, { role: 'assistant', text: replyText }])
          return
        }
      }

      const fallback = fallbackAnswer(text)
      setMessages((prev) => [...prev, { role: 'assistant', text: fallback }])
    } catch (err) {
      __dbg__({
        runId: 'pre-fix',
        hypothesisId: 'H4',
        location: 'DoubtChat.jsx:send:catch',
        message: 'send error',
        data: { message: String(err?.message ?? err) },
      })
      const msg =
        'Galaxy could not reach the server. Start the backend with `npm run server` and open the site from the dev server (for example `http://localhost:5173/`), not by double-clicking files in `dist/`.'
      setMessages((prev) => [...prev, { role: 'assistant', text: msg }])
    } finally {
      setIsThinking(false)
    }
  }

  return (
    <div className="doubt-chat-page">
      <div className="container">
        <header className="page-header">
          <h1>Galaxy – AI Doubt Assistant</h1>
          <p>
            Ask your doubts about coding, DSA, quizzes, practice, or where to find things on this site.
          </p>
        </header>

        <div className="chat-card">
          <div className="chat-messages">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`chat-bubble ${m.role === 'user' ? 'user' : 'assistant'}`}
              >
                <span className="role-label">{m.role === 'user' ? 'You' : 'Galaxy'}</span>
                <p>{m.text}</p>
              </div>
            ))}
            {isThinking && (
              <div className="chat-bubble assistant">
                <span className="role-label">Galaxy</span>
                <p>Thinking…</p>
              </div>
            )}
          </div>

          <form className="chat-input-row" onSubmit={send}>
            <input
              type="text"
              placeholder="Ask Galaxy a doubt, e.g. “What is flexbox?”"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={isThinking}>
              {isThinking ? 'Sending…' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

