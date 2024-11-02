"use client";

import axios from 'axios';
import { useState, useEffect } from "react";
import * as z from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { TriangleAlert, LoaderCircle, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const formSchema = z.object({
    emailAddress: z.string().email(),
    name: z.string().min(3).max(50),
    message: z.string().min(10).max(500),
    timestamp: z.string()
});

export default function ContactForm() {
    const [loadTime, setLoadTime] = useState<number>(Date.now());
    const [loading, setLoading] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);
    const [honeyPotFieldName, setHoneyPotFieldName] = useState<string>("honeypot");

    // Generate a random field name for the honeypot field
    useEffect(() => {
        const randomFieldName = `field_${Math.random().toString(36).substring(7)}`;
        setHoneyPotFieldName(randomFieldName);
        setLoadTime(Date.now());
    }, [])

    // Dynamically add the honeypot field to the form schema
    const dynamicFormSchema = formSchema.extend({
        [honeyPotFieldName]: z.string().optional().refine((value) => {
            return value === "" && Date.now() - loadTime > 3000;
        }, { message: "Spam detected!" })
    });

    // Initialize the form with the dynamic schema
    const form = useForm<z.infer<typeof dynamicFormSchema>>({
        resolver: zodResolver(dynamicFormSchema),
        defaultValues: {
            emailAddress: "",
            name: "",
            message: "",
            timestamp: loadTime.toString()
        },
    })

    // Register the honeypot field into the form schema
    useEffect(() => {
        form.register(honeyPotFieldName);
    }, [honeyPotFieldName, form]);

    // Initialize Google ReCaptcha Hook for Form Submission Verification
    const { executeRecaptcha } = useGoogleReCaptcha();

    // Handler for Form Submission
    async function handleSubmit(values: z.infer<typeof dynamicFormSchema>) {
        setLoading(true);

        // Verify Recaptcha Token
        if (!executeRecaptcha) {
            console.error("Recaptcha not initialized");
            return;
        }

        // Initialize Recaptcha Token
        const gRecaptchaToken = await executeRecaptcha("msbussing_form");

        // Finalize Email HTML Template Body 
        const htmlTemplate = `
            <div>
                <strong>Email:</strong> ${values.emailAddress}
                <br/>
                <strong>Name:</strong> ${values.name}
                <br/>
                <strong>Message:</strong> ${values.message}
            </div>
        `

        const data = {
            from: values.emailAddress,
            subject: "Submission from Contact Form",
            body: values.message,
            html: htmlTemplate,
            gRecaptchaToken
        }

        // Request to Send Email
        await axios({
            method: "POST",
            url: "/api/send-email",
            data,
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {

            // Successful Email Send User Feedback with Status Code 200
            setEmailSuccess(true);
            setSubmitMessage("Email sent successfully.");

            // Reset Form Fields on Successful Email Send
            form.reset();

        }).catch((error) => {

            if (error.response.status === 429) {
                // Rate Limit Exceeded User Feedback with Status Code 429
                setSubmitMessage("Too many submissions. Please try again later.");
            } else {
                // Uncaptured Error User Feedback
                setSubmitMessage("Something went wrong. Please try again later.");
            }

            setEmailError(true);

        }).finally(() => {
            setLoading(false);

            // Timeout for User Feedback Message
            setTimeout(() => {
                setEmailError(false);
                setEmailSuccess(false);
                setSubmitMessage(null);
            }, 5000);
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='w-full lg:w-1/3 mx-auto flex flex-col gap-4'>
                {/* Honeypot Field - Randomized Name and Hidden */}
                <input
                    type="text"
                    placeholder="Tell Us More"
                    {...form.register(honeyPotFieldName)}
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

                <FormField control={form.control} name="emailAddress" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Email address</FormLabel>
                            <FormControl>
                                <Input placeholder="john.doe@gmail.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }} ></FormField>

                <FormField control={form.control} name="name" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }} ></FormField>

                <FormField control={form.control} name="message" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your message here..." rows={9} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }} ></FormField>

                {emailSuccess && <Alert>
                    <Send size={20} />
                    <AlertTitle>Form Submission Completed</AlertTitle>
                    <AlertDescription>
                        {submitMessage}
                    </AlertDescription>
                </Alert>}

                {emailError && <Alert variant='destructive'>
                    <TriangleAlert size={20} />
                    <AlertTitle>Form Submission Failed</AlertTitle>
                    <AlertDescription>
                        {submitMessage}
                    </AlertDescription>
                </Alert>}

                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? <div className="flex flex-row gap-2 items-center justify-center"><LoaderCircle className="animate-spin" size={24} /> Please Wait</div> : "Submit"}
                </Button>
            </form>
        </Form>
    );
}