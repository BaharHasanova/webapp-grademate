import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const homePage = () => {
	const pageStyle = {
		backgroundImage: `url('/assets/login-page.png')`,
		backgroundSize: "cover",
		backgroundPosition: "center center",
	};

	return (
		<div style={pageStyle}>
			<Navbar />

			<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 xl:gap-24 items-center mt-20">
					<div className="flex-1">
						<h1 className="block text-5xl font-bold text-gray-800 sm:text-6xl lg:text-8xl lg:leading-tight dark:text-white">
							Track Your <br /> Progress
						</h1>
						<p className="mt-16 text-2xl text-white">
							Effortlessly manage and monitor your grades,
							<br /> ensuring you stay on top of your academic
							<br /> performance.
						</p>
						<div className="mt-20 flex gap-4">
							<a
								href="/page"
								className="inline-flex justify-center items-center min-w-[255px] min-h-[73px] px-8 py-2 text-base font-bold rounded-full border border-transparent uppercase bg-customPurple hover:bg-customTurquoise text-white no-underline disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							>
								Student
							</a>
							<a
								href="/login"
								className="inline-flex justify-center items-center min-w-[255px] min-h-[73px] px-8 py-2 text-base font-bold rounded-full border-3 border-white uppercase hover:bg-customTurquoise text-white no-underline disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							>
								Advisor
							</a>
						</div>
					</div>

					<div className="flex-1">
						<img
							src="/assets/monitor.png"
							alt="Monitor"
							width="600"
							height="400"
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default homePage;
