'use client'
import { useState } from 'react'

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    setStatus(null)

    try {
      const response = await fetch('https://email-backend-teal.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, message })
      })

      const result = await response.json()

      if (response.ok) {
        setStatus('Email sent successfully!')
        setEmail('')
        setMessage('')
      } else {
        console.log('Failed', result?.message)
        setStatus('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('An unexpected error occurred.')
    }
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>Send Us a Message</h2>
      <form onSubmit={(e) => {
        handleSubmit(e).catch(() => {})
      }}
      >
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-gray-700 font-medium mb-2'>
            Message
          </label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200'
        >
          Send
        </button>
      </form>
      {status !== null && (
        <p className='mt-4 text-sm text-center text-gray-600'>
          {status}
        </p>
      )}
    </div>
  )
}

export default EmailForm
