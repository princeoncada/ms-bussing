"use client";

import { useState, useEffect } from "react";

const pages = [
	["bg-bus1", "bg-bus2", "bg-bus3", "bg-bus4", "bg-bus5", "bg-bus6"],
	["bg-bus4", "bg-bus5", "bg-bus6", "bg-bus1", "bg-bus2", "bg-bus3"],
];

export default function Fleet() {
	const [currentPage, setCurrentPage] = useState(1);

	function handleNext() {
		setCurrentPage(currentPage + 1);
	}

	function handlePrev() {
		setCurrentPage(currentPage - 1);
	}

	return (
		<section className="text-center rounded bg-white pt-12 p-3 pb-6 md:px-10 lg:px-32">
			<h1 className="font-bold text-3xl mb-4">Our Fleet</h1>
			<p className="text-lg mb-12 md:px-32">
				Our fleet consists of modern, well-maintained buses equipped
				with the latest safety features. Each bus undergoes regular
				maintenance to ensure safety and reliability. We also have buses
				with varying capacities to accommodate different needs.
			</p>
			{pages.map((page, index) => (
				<div key={page.join("")} className={`${ currentPage === index + 1 ? "grid" : "hidden" } grid-cols-2 grid-rows-1 gap-3 mb-4`}>
					{page.map((bus) => (
						<div key={bus} className={`rounded h-48 md:h-64 lg:h-96 bg-cover bg-center ${bus}`}></div>
					))}
				</div>
			))}
			<div className="flex flex-row justify-center gap-3 text-4xl">
				<button
					className="p-1 px-2 bg-gray-100 rounded w-1/2"
					onClick={handlePrev}
					type="button"
					disabled={currentPage === 1}
				>
					<i className="bx bx-left-arrow-alt"></i>
				</button>
				<button
					className="p-1 px-2 bg-gray-100 rounded w-1/2"
					onClick={handleNext}
					type="button"
					disabled={currentPage === 2}
				>
					<i className="bx bx-right-arrow-alt"></i>
				</button>
			</div>
		</section>
	);
}
