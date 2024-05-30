export default function Contact() {
	return (
		<section className="text-center rounded bg-white py-12 pb-16 px-8">
			<h2 className="text-3xl font-bold mb-8">Contact Us</h2>
			<form
				action=""
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
				></textarea>
				<button
					type="submit"
					className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300 ease-in-out"
				>
					Submit
				</button>
			</form>
		</section>
	);
}
