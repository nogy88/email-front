import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, message } = req.body

    // Mock email sending
    if (email && message) {
      return res.status(200).json({ message: 'Email sent successfully!' })
    } else {
      return res.status(400).json({ error: 'Email or message is missing.' })
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed.' })
  }
}
