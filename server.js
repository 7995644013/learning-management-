import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { GoogleGenAI } from '@google/genai'

const app = express()
app.use(cors())
app.use(express.json())

// #region agent log
const __DBG_ENDPOINT__ =
  'http://127.0.0.1:7612/ingest/c1112758-bd19-4395-ad2f-7654233b4714'
const __DBG_SESSION_ID__ = '866f53'
function __dbg__(payload) {
  try {
    fetch(__DBG_ENDPOINT__, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': __DBG_SESSION_ID__ },
      body: JSON.stringify({ sessionId: __DBG_SESSION_ID__, timestamp: Date.now(), ...payload }),
    }).catch(() => {})
  } catch {}
}
// #endregion agent log

let ai = null
if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here') {
  ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
} else {
  console.warn(
    'GEMINI_API_KEY is missing or still set to the placeholder. Galaxy will not be able to call Gemini until it is configured.'
  )
}

app.post('/api/galaxy-chat', async (req, res) => {
  try {
    const { messages } = req.body

    __dbg__({
      runId: 'pre-fix',
      hypothesisId: 'H2',
      location: 'server.js:/api/galaxy-chat:entry',
      message: 'incoming request',
      data: {
        hasBody: Boolean(req.body),
        messagesType: Array.isArray(messages) ? 'array' : typeof messages,
        messagesLen: Array.isArray(messages) ? messages.length : null,
      },
    })

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages must be an array' })
    }

    if (!ai) {
      return res.status(500).json({
        error:
          'Galaxy is not configured with a Gemini API key. Set GEMINI_API_KEY in .env, then restart the server.',
      })
    }

    const systemPrompt = `You are "Galaxy", the official AI doubt assistant of this website.

Your role:
- Solve coding & DSA doubts, explain concepts, and help with quizzes/practice.
- If the user asks about website navigation, guide them to the right section.
- Be clear, friendly, and helpful. Prefer step-by-step explanations.

Personality:
- Friendly, intelligent, and professional.
- Keep answers short and easy to understand, unless the user asks for depth.
- Use simple language unless the user asks for technical details.

Rules:
- Always introduce yourself as Galaxy if asked who you are.
- If you do not know something specific about this site, politely say:
  "I’m Galaxy, the website assistant. I don't have that information yet, but I can help guide you to the right section."

Capabilities:
- Coding/DSA explanations with examples
- Debugging help and common mistakes
- Guidance to site features (courses, playground, quizzes, practice)

Tone:
- Polite
- Helpful
- Positive
- Concise`

    __dbg__({
      runId: 'pre-fix',
      hypothesisId: 'H1',
      location: 'server.js:/api/galaxy-chat:gemini-branch',
      message: 'using gemini',
      data: { model: process.env.GEMINI_MODEL || 'gemini-2.5-flash' },
    })

    const safeMessages = messages
      .filter((m) => m && typeof m === 'object')
      .map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] }))
      .filter((m) => (m.role === 'user' || m.role === 'model') && m.parts[0].text)

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
      contents: safeMessages,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.3,
      }
    })

    const replyText = response.text || 'Sorry, Galaxy could not generate a reply.'
    __dbg__({
      runId: 'pre-fix',
      hypothesisId: 'H3',
      location: 'server.js:/api/galaxy-chat:gemini-success',
      message: 'gemini responded',
      data: { replyLen: typeof replyText === 'string' ? replyText.length : null },
    })
    return res.json({ reply: { role: 'assistant', content: replyText } })
  } catch (err) {
    __dbg__({
      runId: 'pre-fix',
      hypothesisId: 'H4',
      location: 'server.js:/api/galaxy-chat:catch',
      message: 'route error',
      data: { message: String(err?.message ?? err), status: err?.status ?? null },
    })
    console.error('Galaxy (Gemini) error:', err)

    let message = 'Galaxy had a problem responding.'
    const status = err?.status
    const errMsg = String(err?.message ?? '').toLowerCase()

    if (status === 401 || errMsg.includes('api key') || errMsg.includes('authentication')) {
      message =
        'Invalid Gemini API key. Add your key to .env as GEMINI_API_KEY=... then restart with: npm run server.'
    } else if (status === 429 || errMsg.includes('rate limit') || errMsg.includes('quota')) {
      message = 'AI rate limit or quota exceeded. Please try again later or check your AI provider account.'
    } else if (status === 404 || errMsg.includes('model') || errMsg.includes('not found')) {
      message =
        'Gemini model not available. Set GEMINI_MODEL in .env to a model your account can access.'
    } else if (errMsg.includes('network') || errMsg.includes('econnrefused')) {
      message = 'Cannot reach the AI provider. Check your internet connection.'
    }

    res.status(500).json({ error: message })
  }
})

import fs from 'fs'
import { exec } from 'child_process'
import path from 'path'
import os from 'os'
import crypto from 'crypto'

app.post('/api/execute', async (req, res) => {
  const { language, sourceCode } = req.body
  const tmpdir = os.tmpdir()
  const id = crypto.randomUUID()
  
  const runResponse = (stdout, stderr) => {
    res.json({ run: { stdout: stdout || '', stderr: stderr || '' } })
  }

  const aiFallback = async (code, lang) => {
    try {
      if (!ai) return runResponse('', 'AI Execution Engine not configured. Please add GEMINI_API_KEY.')
      const prompt = `You are a strict code execution engine simulator for ${lang}. Execute the following code and return ONLY the exact standard output (stdout). Do not wrap in markdown tags or explain anything. If there is a compilation or syntax error, return the exact error message.\n\nCode:\n${code}`
      const response = await ai.models.generateContent({
        model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
        contents: prompt
      })
      runResponse(response.text?.replace(/^```[a-z]*\n|```$/gm, '').trim(), '')
    } catch(err) {
      runResponse('', 'Code execution failed and AI fallback unavailable: ' + String(err))
    }
  }

  if (language === 'javascript') {
    const file = path.join(tmpdir, `${id}.js`)
    fs.writeFileSync(file, sourceCode)
    exec(`node "${file}"`, { timeout: 5000 }, (err, stdout, stderr) => {
      if (err && !stdout && !stderr) return aiFallback(sourceCode, language)
      runResponse(stdout, stderr || (err ? String(err) : ''))
    })
  } else if (language === 'python') {
    const file = path.join(tmpdir, `${id}.py`)
    fs.writeFileSync(file, sourceCode)
    exec(`python "${file}"`, { timeout: 5000 }, (err, stdout, stderr) => {
      // Provide AI fallback if python is not installed locally
      if (err && (err.message.includes('not recognized') || err.message.includes('not found') || err.message.includes('ENOENT'))) {
        exec(`python3 "${file}"`, { timeout: 5000 }, (err2, stdout2, stderr2) => {
          if (err2 && (err2.message.includes('not found') || err2.message.includes('ENOENT'))) {
             return aiFallback(sourceCode, language)
          }
          runResponse(stdout2, stderr2 || (err2 ? String(err2) : ''))
        })
      } else {
        runResponse(stdout, stderr || (err ? String(err) : ''))
      }
    })
  } else {
    // For C++ and Java, fallback right to AI to avoid local compiler dependencies
    await aiFallback(sourceCode, language)
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Galaxy (Gemini) server running on http://localhost:${PORT}`)
})

