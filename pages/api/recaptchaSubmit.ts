// pages/api/recaptchaSubmit.ts
import type { NextApiRequest, NextApiResponse } from 'next';

// wtf is going on here?
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        return res.status(200).json({ success: true, message: "API route accessed successfully" });
    }
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
