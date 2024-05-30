export default function Hero() {
    return (
		<section className="text-center">
			<div className="-z-10 w-full h-96 py-72 px-4 flex flex-col bg-hero justify-center text-white rounded bg-size-sm bg-pos-sm md:bg-pos-md md:bg-size-md lg:bg-size-lg lg:bg-pos-lg">
				<h1 className="text-4xl font-bold lg:text-5xl">
					Welcome to <br />{" "}
					<span className="text-5xl tracking-wide underline lg:text-6xl lg:tracking-wider">
						M&S Bussing
					</span>
				</h1>
				<p className="text-xl mt-4 md:px-40 lg:text-2xl lg:mt-4 lg:px-56">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Similique assumenda
				</p>
				<button className="bg-white mx-auto text-black p-3 px-8 mt-6 rounded text-xl">
					Get Started <i className="bx bx-right-arrow text-base"></i>
				</button>
			</div>
		</section>
	);
}