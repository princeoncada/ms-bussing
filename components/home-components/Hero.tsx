export default function Hero() {
    return (
        <section className="text-center">
            <div className="-z-10 w-full h-96 py-72 px-4 flex flex-col bg-hero justify-center text-white rounded bg-size-sm bg-pos-sm md:bg-pos-md md:bg-size-md lg:bg-size-lg lg:bg-pos-lg">
                <h1 className="text-4xl font-bold lg:text-5xl">
                    Welcome to <br />{" "}
                    <span className="text-5xl tracking-wide underline lg:text-6xl lg:tracking-wider">
                        MSBUSSING
                    </span>
                </h1>
                <p className="text-xl mt-4 md:px-40 lg:text-2xl lg:mt-4 lg:px-56">
                    Driving Innovation in Bus Fleet Management & Consultation.
                </p>
                <p className="text-xl mt-2 md:px-32 lg:text-2xl lg:mt-2 lg:px-48">
                    From optimized routes to advanced tracking, MSBUSSING empowers your operations with smarter, efficient solutions.
                </p>
                <button className="bg-white mx-auto text-black p-3 px-8 mt-6 rounded text-xl hover:bg-gray-200 transition duration-200">
                    Get Started <i className="bx bx-right-arrow text-base"></i>
                </button>
            </div>
        </section>
    );
}
