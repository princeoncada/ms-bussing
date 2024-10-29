'use client';

import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requestObj = {
            to: 'prince.oncada@gmail.com',
            subject: 'New message from your website',
            body: `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
        }

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObj)
        });

        const data = await response.json();

        if (data.success) {
            setEmailSuccess(true);
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } else {
            setEmailError(true);
        }

        setTimeout(() => {
            setEmailSuccess(false);
            setEmailError(false);
        }, 5000);
    };

	return (
		<section className="text-center rounded bg-white py-12 pb-16 px-8">
			<h2 className="text-3xl font-bold mb-8">Contact Us</h2>
			<form
                onSubmit={handleSubmit}
				className="flex flex-col justify-center items-start bg-gray-200 p-8 rounded shadow-lg mx-auto max-w-lg"
			>
				<label
					htmlFor="name"
					className="mb-2 text-left w-full font-semibold"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="mb-4 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
				/>
				<label
					htmlFor="email"
					className="mb-2 text-left w-full font-semibold"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="mb-4 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
				/>
				<label
					htmlFor="message"
					className="mb-2 text-left w-full font-semibold"
				>
					Message
				</label>
				<textarea
					name="message"
					id="message"
					cols={20}
					rows={10}
					className="mb-4 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
				></textarea>
				<button
					type="submit"
					className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300 ease-in-out"
				>
					Submit
				</button>
			</form>

            {emailSuccess && <p className="mt-4 text-green-500">Email sent successfully!</p>}
            {emailError && <p className="mt-4 text-red-500">Failed to send email. Please try again later.</p>}
		</section>
	);
}
