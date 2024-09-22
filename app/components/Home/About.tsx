import Image from "next/image";

export default function About() {
	return (
		<section className="flex flex-col md:flex-row">
			<div className="flex justify-center items-center flex-col md:flex-row">
                <div className="w-full h-64 md:h-full bg-about bg-size-sm md:bg-size-about-md lg:bg-size-about-lg bg-pos-about-sm md:bg-pos-about-md lg:bg-pos-about-lg rounded-tl rounded-tr md:rounded-none md:rounded-tl md:rounded-bl">
                </div>
				<div className="h-full md:w-1/2 py-8 pb-16 lg:pb-8 px-8 flex flex-col gap-3 bg-white rounded-bl rounded-br md:rounded-none md:rounded-tr md:rounded-br">
					<h1 className="font-bold text-3xl">About MSBUSSING</h1>
					<p className="text-lg">
						At MSBUSSING, we specialize in providing cutting-edge
						bus fleet management and consultation services tailored
						to your needs. With years of industry expertise, we help
						bus operators optimize routes, improve efficiency, and
						enhance passenger satisfaction through innovative
						management solutions.
					</p>
					<p className="text-lg">
						From real-time fleet tracking to automated maintenance
						systems, we empower you to operate smarter and more
						sustainably. Let us drive your success with reliable and
						personalized solutions.
					</p>
				</div>
			</div>
		</section>
	);
}
