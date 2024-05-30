"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		setIsOpen(x => !x);
	}

	return (
		<>
			<nav className="flex flex-row justify-between bg-white p-4 sticky top-0 w-full z-10 xl:mx-3 xl:w-auto">
				<div>
					<h1 className="font-bold md:text-xl lg:text-2xl">Logo</h1>
				</div>
				<button className="flex flex-col gap-1 justify-center items-end lg:hidden" onClick={toggleMenu}>
					<div className={`w-7 h-1 bg-black transition ease-in-out duration-500 rounded-sm ${ isOpen ? "-rotate-45 translate-y-2" : "" }`}/>
					<div className={`h-1 bg-black transition-width ease-in-out duration-500 rounded-sm ${ isOpen ? "w-0" : "w-7" }`}/>
					<div className={`w-7 h-1 bg-black transition ease-in-out duration-500 rounded-sm ${ isOpen ? "rotate-45 -translate-y-2" : "" }`}/>
				</button>
				<div className="hidden flex-row gap-6 lg:flex justify-center items-center text-lg">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/services">Services</Link>
					<Link href="/contact">Contact</Link>
				</div>
			</nav>
			<div className={`fixed w-full top-14 bg-gray-100 p-4 flex flex-col gap-3 transition ease-in-out duration-500 ${ isOpen ? "" : "-translate-x-full" } z-10 lg:hidden`}>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/services">Services</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</>
	);
}
