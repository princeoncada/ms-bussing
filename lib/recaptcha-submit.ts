import axios from "axios";
import { NextResponse } from "next/server";

type Data = {
    gRecaptchaToken: string;
};

export async function recaptchaSubmit({ gRecaptchaToken }: Data) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    let res;

    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

    try {
        res = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify`,
            formData,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
    } catch (e) {
        return NextResponse.json({ success: false, message: "Failed to verify reCAPTCHA: " + e }, { status: 500 });
    }

    if (res?.data?.success && res.data?.score > 0.5) {
        return NextResponse.json({ success: true, message: "reCAPTCHA verification successful", score: res.data.score }, { status: 200 });
    } else {
        return NextResponse.json({ success: false, message: "reCAPTCHA verification failed", score: res.data.score }, { status: 400 });
    }
} 