import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const postData = await request.json();
    const { gRecaptchaToken } = postData;

    try {
        const res = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            `secret=${secretKey}&response=${gRecaptchaToken}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        if (res.data.success && res.data.score > 0.5) {
            console.log("reCAPTCHA score:", res.data.score);
            return NextResponse.json({ success: true, score: res.data.score });
        } else {
            return NextResponse.json({ success: false });
        }
    } catch (e) {
        console.error("Error verifying reCAPTCHA:", e);
        return NextResponse.json({ success: false });
    }
}
