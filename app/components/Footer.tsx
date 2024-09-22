import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<>
			<footer className="bg-gray-800 text-white p-8">
				<div className="container mx-auto flex flex-col md:flex-row justify-evenly">
					<div className="flex flex-col items-start mb-6 md:mb-0">
						<div className="mb-4">
							{/* Replace with your logo image */}
                            <Image src={`/images/logo.png`} alt="Logo" width={100} height={100}/>
						</div>
						<div className="text-sm">
							<p>123 Main St, City, State</p>
							<p>(123) 456-7890</p>
							<p>email@example.com</p>
						</div>
					</div>
					<div className="flex flex-row gap-14">
						<div className="flex flex-col items-start mb-6 md:mb-0">
							<Link href="/">Privacy</Link>
							<Link href="/">Support</Link>
						</div>
						<div className="flex flex-col items-start">
							<Link href="/">Home</Link>
							<Link href="/about">About</Link>
							<Link href="/services">Services</Link>
							<Link href="/contact">Contact</Link>
						</div>
					</div>
				</div>
			</footer>
			<div className="bg-gray-900 text-gray-400 text-center py-3">
				<div>© 2024 Hafstaff</div>
			</div>
		</>
	);
}
