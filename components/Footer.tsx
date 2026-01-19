import Link from "next/link";
import LogoTwo from "./LogoTwo";
import Logo from "./Logo";

export default function Footer() {
	return (
		<>
			<footer className="px-3">
        <div className="p-8 bg-gray-800 text-white rounded-t-md">
				<div className="container mx-auto flex flex-col md:flex-row justify-evenly">
					<div className="flex flex-col items-start mb-6 md:mb-0">
                    <div className="h-[56px] mb-6"><LogoTwo></LogoTwo></div>
						<div className="text-sm">
							<p>520 Chestnut Ridge Rd spring Valley NY 10977</p>
							<p>+1(845) 202 2950</p>
							<p>mates@msbussing.com</p>
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
        </div>
			</footer>
		</>
	);
}
