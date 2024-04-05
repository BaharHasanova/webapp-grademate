// IntroSection.tsx
import React from "react";
import Footer from "./Footer";

export default function IntroSection() {
	return (
		<div
			className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed"
			style={{
				backgroundImage: "url('/assets/login-page.png')",
			}}
		>
			<div className="w-full px-8 sm:px-10 lg:px-16 xl:px-24 2xl:px-32">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 xl:gap-24 items-center my-20">
					<div>
						<h1 className="text-6xl font-bold text-gray-800 sm:text-7xl lg:text-9xl lg:leading-tight dark:text-white">
							Track Your <br /> Progress
						</h1>
						<p className="mt-16 text-2xl text-gray-800 dark:text-white">
							Effortlessly manage and monitor your grades,
							<br /> ensuring you stay on top of your academic <br />
							performance.
						</p>
						<div className="mt-20 flex gap-4">
							<a
								href="/studentLogin"
								className="inline-flex justify-center items-center w-full min-h-[73px] px-8 py-3 text-lg font-bold rounded-full border border-transparent uppercase bg-customPurple hover:bg-customTurquoise text-white no-underline disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							>
								Student
							</a>
							<a
								href="/advisorLogin"
								className="inline-flex justify-center items-center w-full min-h-[73px] px-8 py-3 text-lg font-bold rounded-full border-2 border-customTurquoise uppercase bg-transparent hover:bg-customTurquoise text-white no-underline disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
							>
								Advisor
							</a>
						</div>
					</div>
					<div>
						<img
							src="/assets/monitor.png"
							alt="Monitor"
							className="w-full" // Let the image be as wide as the column allows
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
