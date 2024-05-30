export default function Services() {
    return (
		<section className="text-center rounded bg-white py-12 pb-16 md:py-12">
			<h1 className="font-bold text-3xl mb-12">Services</h1>

			<div className="flex flex-col md:flex-row gap-12 md:gap-8 md:px-6 lg:gap-8 lg:px-24">
				<div className="flex flex-col justify-center px-12 rounded md:px-0 md:w-1/3 md:justify-start">
					<i className="bx bx-run text-6xl mb-4"></i>
					<h2 className="text-2xl font-semibold mb-2">
						Efficient Fleet Management
					</h2>
					<p>
						We provide efficient management of school bus fleets,
						ensuring optimal route planning and bus utilization.
					</p>
				</div>

				<div className="flex flex-col justify-center px-12 rounded md:px-0 md:w-1/3 md:justify-start">
					<i className="bx bx-time text-6xl mb-4"></i>
					<h2 className="text-2xl font-semibold mb-2">
						Timely Operations
					</h2>
					<p>
						Our services prioritize punctuality, guaranteeing that
						students arrive at their destinations on time, every
						time.
					</p>
				</div>

				<div className="flex flex-col justify-center px-12 rounded md:px-0 md:w-1/3 md:justify-start">
					<i className="bx bx-map-pin text-6xl mb-4"></i>
					<h2 className="text-2xl font-semibold mb-2">
						Real-Time Tracking
					</h2>
					<p>
						We offer real-time GPS tracking for all buses, providing
						parents and schools with peace of mind regarding the
						location and status of each bus.
					</p>
				</div>
			</div>
		</section>
	);
}