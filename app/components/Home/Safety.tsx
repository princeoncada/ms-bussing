export default function Safety() {
	return (
		<section className="text-center rounded bg-white py-12 pb-16 px-8">
			<h2 className="text-3xl font-bold mb-4">Our Safety Protocols</h2>
			<p className="text-lg mb-8 md:px-24 lg:px-56">
				Safety is our top priority. Our drivers undergo rigorous
				training and are well-versed in emergency protocols. We have
				implemented numerous safety measures to ensure the well-being of
				our passengers.
			</p>
			<div className="flex flex-row justify-center gap-4 text-3xl">
				<i className="bx bxs-alarm-exclamation border-2 p-3.5 rounded-full border-black"></i>
				<i className="bx bxs-shield-alt-2 border-2 p-3.5 rounded-full border-black"></i>
				<i className="bx bxs-heart border-2 p-3.5 rounded-full border-black"></i>
			</div>
		</section>
	);
}
