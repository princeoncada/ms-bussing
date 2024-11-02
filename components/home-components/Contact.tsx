"use client";

// unresolved imports
import axios from 'axios';
import { useState, useEffect } from "react";
import * as z from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    name: z.string().min(3, "Name must be at least 3 characters").max(50),
    message: z.string().min(10, "Message must be at least 10 characters").max(500),
	timestamp: z.string()});

export default function Contact() {
    const [loadTime, setLoadTime] = useState<number>(Date.now());
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);
    const [honeypotField, setHoneypotField] = useState<string>("honeypot");

    // wth is going on here?
    const { executeRecaptcha } = useGoogleReCaptcha();

    // where is this coming from?
    useEffect(() => {
        const randomFieldName = `field_${Math.random().toString(36).substring(7)}`;
        setHoneypotField(randomFieldName);
    }, []);

    const dynamicFormSchema = formSchema.extend({
        [honeypotField]: z.string().optional().refine((value) => value === "", { message: "Spam detected!" })
    });

    // somethings wrong with this
    const form = useForm<z.infer<typeof dynamicFormSchema>>({
        resolver: zodResolver(dynamicFormSchema),
        defaultValues: {
            email: "",
            name: "",
            message: "",
			timestamp: loadTime.toString()},
    });

    useEffect(() => {
        form.register(honeypotField);
    }, [honeypotField, form]);

    async function handleSubmit(values: z.infer<typeof dynamicFormSchema>) {
        if (!executeRecaptcha) {
            console.error("Recaptcha not initialized");
            return;
        }

        const gRecaptchaToken = await executeRecaptcha("contact_form");

        // Verify Recaptcha
        const recaptchaResponse = await axios.post('/api/recaptchaSubmit', { gRecaptchaToken });
        if (!recaptchaResponse.data.success) {
            setSubmitMessage("Failed to verify reCAPTCHA! You might be a robot.");
            setEmailError(true);
            return;
        }

        // try catch and if and else? wth
        // If recaptcha verification is successful, send the email
        const requestObj = {
            to: 'fwend.email.backend@gmail.com',
            subject: 'New message from your website',
            body: `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`
        };

        try {
            const emailResponse = await axios.post('/api/send-email', requestObj);
            if (emailResponse.data.success) {
                setEmailSuccess(true);
                setSubmitMessage('ReCaptcha Verified and Form Submitted!');
                form.reset(); // Reset form values after successful submission
            } else {
                setEmailError(true);
                setSubmitMessage("Failed to send email. Please try again later.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setEmailError(true);
            setSubmitMessage("An error occurred. Please try again later.");
        }

        // Clear success/error messages after 5 seconds
        setTimeout(() => {
            setEmailSuccess(false);
            setEmailError(false);
            setSubmitMessage(null);
        }, 5000);
    }

    return (
        <section className="text-center rounded bg-white py-12 pb-16 px-8">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col justify-center items-start bg-gray-200 p-8 rounded shadow-lg mx-auto max-w-lg">
                
                {/* Honeypot Field - Randomized Name and Hidden */}
                <input
                    type="text"
                    placeholder="Tell Us More"
                    {...form.register(honeypotField)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                {/* Timestamp Field - Hidden */}
                <input
                    type="hidden"
                    value={loadTime.toString()}
                    {...form.register("timestamp")}
                />

                <label className="mb-2 text-left w-full font-semibold" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    className="mb-4 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...form.register("name")}
                    required
                />
                
                <label className="mb-2 text-left w-full font-semibold" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    className="mb-4 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...form.register("email")}
                    required
                />
                
                <label className="mb-2 text-left w-full font-semibold" htmlFor="message">Message</label>
                <textarea
                    id="message"
                    className="mb-4 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={10}
                    {...form.register("message")}
                    required
                />

                <button type="submit" className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300 ease-in-out">
                    Submit
                </button>
            </form>

            {submitMessage && <p className={`mt-4 ${emailSuccess ? "text-green-500" : "text-red-500"}`}>{submitMessage}</p>}
        </section>
    );
}
