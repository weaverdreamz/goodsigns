import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')
  const [envDebug, setEnvDebug] = useState({ serviceId: false, templateId: false, publicKey: false })

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    // Read env vars (Vite exposes variables that start with VITE_ via import.meta.env)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Report which env vars are present so the UI can show helpful debug info
    setEnvDebug({ serviceId: !!serviceId, templateId: !!templateId, publicKey: !!publicKey })

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      const missing = [
        !serviceId && 'VITE_EMAILJS_SERVICE_ID',
        !templateId && 'VITE_EMAILJS_TEMPLATE_ID',
        !publicKey && 'VITE_EMAILJS_PUBLIC_KEY',
      ].filter(Boolean)
      const msg = `Missing EmailJS env var(s): ${missing.join(', ')}. See .env.local and restart dev server.`
      console.error(msg)
      setErrorMessage(msg)
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('Email send error', err)
      const msg = (err && (err.text || err.statusText || err.message)) || JSON.stringify(err)
      setErrorMessage(msg)
      setStatus('error')
    }
  }

  function handleOpenEmailClient(e) {
    e.preventDefault()
    if (!formRef.current) return
    const form = formRef.current
    const name = (form.elements.namedItem('from_name') || {}).value || ''
    const from = (form.elements.namedItem('reply_to') || {}).value || ''
    const message = (form.elements.namedItem('message') || {}).value || ''

    const subject = `Portfolio message from ${name || from || 'visitor'}`
    const body = [
      `Name: ${name}`,
      `Email: ${from}`,
      '',
      message,
    ].join('\n')

    const mailto = `mailto:goodsigns360@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    // Open the user's email client
    window.location.href = mailto
  }

  return (
    <section className="page contact">
      <div className="container">
        <h2>Contact</h2>
        <p>If you'd like to work together, send me an email at <a href="mailto:goodsigns360@gmail.com">goodsigns360@gmail.com</a>.</p>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="from_name" placeholder="Your name" required aria-required="true" />
          </label>
          <label>
            Email
            <input type="email" name="reply_to" placeholder="you@example.com" required aria-required="true" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Write your message..." required aria-required="true" />
          </label>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button className="btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send'}</button>
            <button className="btn" type="button" onClick={handleOpenEmailClient} title="Open your email app to send this message">Open in Email App</button>
            {status === 'success' && <span style={{ color: '#7c3aed' }}>Message sent — thank you!</span>}
            {status === 'error' && <span style={{ color: '#ff6b6b' }}>Failed to send. Try again later.</span>}
          </div>
          {status === 'error' && errorMessage && (
            <div style={{ marginTop: 10 }}>
              <strong style={{ display: 'block', marginBottom: 6 }}>Debug info</strong>
              <div style={{ fontSize: 13, color: '#333' }}>
                <div><strong>Error:</strong> <span style={{ color: '#b91c1c' }}>{errorMessage}</span></div>
                <div style={{ marginTop: 6 }}><strong>Env presence:</strong></div>
                <div style={{ fontSize: 12, color: '#555' }}>
                  <div>VITE_EMAILJS_SERVICE_ID: {envDebug.serviceId ? '✔️' : '❌'}</div>
                  <div>VITE_EMAILJS_TEMPLATE_ID: {envDebug.templateId ? '✔️' : '❌'}</div>
                  <div>VITE_EMAILJS_PUBLIC_KEY: {envDebug.publicKey ? '✔️' : '❌'}</div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
  
