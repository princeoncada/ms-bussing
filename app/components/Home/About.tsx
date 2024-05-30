export default function About() {
    return (
		<section className="flex flex-col md:flex-row">
			<div className="h-80 flex justify-center items-center md:w-2/3 md:h-full lg:w-3/4">
				<div
					className="w-full h-full rounded-t bg-size-sm bg-about bg-pos-sm md:bg-cover md:rounded-l md:h-[26rem] lg:bg-pos-lg lg:bg-cover lg:h-[30rem]"
				/>
			</div>
			<div className=" bg-white py-8 pb-16 px-8 rounded-b flex flex-col gap-3 md:w-1/3 md:py-6 md:rounded-b-none md:rounded-r lg:w-1/4 justify-center">
				<h1 className="font-bold text-3xl">About Us</h1>
				<p className="text-lg">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Asperiores ab quo officiis, optio, ad porro fugit pariatur
					expedita cupiditate repellendus soluta ipsum. Porro odio
					tempore tempora, sit reiciendis nam qui!
				</p>
			</div>
		</section>
	);
}