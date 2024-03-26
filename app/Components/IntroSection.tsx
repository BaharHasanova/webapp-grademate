// IntroSection.tsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function IntroSection() {
	return (
		<div>
			<Navbar />

			<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 xl:gap-24 items-center mt-20">
					<div>
						<h1 className="block text-5xl font-bold text-gray-800 sm:text-6xl lg:text-8xl lg:leading-tight dark:text-white">
							Track Your <br /> Progress
						</h1>
						<p className="mt-16 text-xl text-gray-800 dark:text-white">
							Effortlessly manage and monitor your grades,
							<br /> ensuring you stay on top of your academic <br />
							performance.
						</p>
						<div className="mt-20 flex gap-4">
							<a
								href="/page" // Adjust the href to the desired path.
								className="inline-flex justify-center items-center min-w-[255px] min-h-[73px] px-8 py-2 text-base font-bold rounded-full border border-transparent uppercase bg-customPurple hover:bg-customTurquoise text-white no-underline disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							>
								Student
							</a>
							<a
								href="alogin" // Adjust the href to the desired path.
								className="inline-flex justify-center items-center min-w-[255px] min-h-[73px] px-8 py-2 text-base font-bold rounded-full border-2 border-customTurquoise uppercase bg-transparent hover:bg-customTurquoise text-white no-underline disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
							>
								Advisor
							</a>
						</div>
					</div>
					<div>
						<img
							src="/assets/monitor.png"
							alt="Monitor"
							className="w-full max-w-md" // adjust size as needed
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
