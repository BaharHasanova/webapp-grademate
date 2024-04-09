import React from "react";
import Navbar from "../Components/Navbar";

const AdvisorPage = () => {
	return (
		<div
			className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed flex flex-col"
			style={{
				backgroundImage: "url('/assets/login-page.png')",
			}}
		>
			{/* Navbar - We ensure that the Navbar has a higher z-index */}
			<Navbar
				isHomePage={false}
				isLoginPage={false}
				pageType="AdvisorPage"
				userName="Advisor"
			/>

			{/* Welcome Header */}
			<div className="w-full text-center py-4">
				<h1 className="text-4xl text-white font-semibold">
					Welcome To Your Dashboard
				</h1>
			</div>

			{/* Banner */}
			<div className="mx-24">
				<div className="h-12"></div>
				<div className="bg-bannerColor h-64 rounded-3xl p-12 flex flex-row items-center justify-between">
					<div className="h-full flex flex-col space-y-12 mr-8 pl-8">
						<div className="space-y-3">
							<h2 className="text-white font-bold text-5xl">
								Welcome back, Advisor!
							</h2>
							<p className="text-white/50 text-2xl">
								Always stay updated in your <b>ADVISOR PORTAL</b>
							</p>
						</div>
						<h5 className="text-white/50 text-xl">December 7, 2023</h5>
					</div>
					<div>
						<img
							src="assets/advisor-elements.svg"
							alt=""
							width={550}
							height={550}
						/>
					</div>
				</div>
			</div>

			{/*Selection Menu - Advisee */}
			<div className="mx-24 mt-8 flex justify-between">
				<div className="flex flex-col items-start mb-6 w-full">
					<h2 className="text-white mb-6 text-2xl">Student Name: </h2>
					<div className="relative inline-flex">
						<select
							id="advisee-select"
							className="py-3 px-4 inline-flex items-center gap-x-2 text-2xl font-medium rounded-lg border border-bannerColor bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						>
							<option value="" disabled selected hidden>
								Select Your Advisee
							</option>
							<option value="Emily Johnson">Emily Johnson</option>
							<option value="Daniel Martinez">Daniel Martinez</option>
							<option value="Sarah Davis">Sarah Davis</option>
							<option value="Michael Wilson">Michael Wilson</option>
						</select>
					</div>
				</div>

				{/*Selection Menu - Semester */}
				<div className="flex flex-col items-start mb-6 w-full">
					<h2 className="text-white mb-6 text-2xl">Semester: </h2>
					<div className="relative inline-flex">
						<select
							id="semester-select"
							className="py-3 px-4 inline-flex items-center gap-x-2 text-2xl font-medium rounded-lg border border-bannerColor bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						>
							<option value="" disabled selected hidden>
								Select Semester
							</option>
							<option value="Semester 1 (2020-2021)">
								Semester 1 (2020-2021)
							</option>
							<option value="Semester 2 (2020-2021)">
								Semester 2 (2020-2021)
							</option>
							<option value="Semester 3 (2020-2021)">
								Semester 3 (2020-2021)
							</option>
							<option value="Semester 1 (2021-2022)">
								Semester 1 (2021-2022)
							</option>
						</select>
					</div>
				</div>

				{/*Selection Menu - Subject Name */}

				<div className="flex flex-col items-start mb-6 w-full">
					<h2 className="text-white mb-6 text-2xl">Subject Name: </h2>
					<div className="relative inline-flex">
						<select
							id="subject-select"
							className="py-3 px-4 inline-flex items-center gap-x-2 text-2xl font-medium rounded-lg border border-bannerColor bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						>
							<option value="" disabled selected hidden>
								Select Subject
							</option>
							<option value="Data Visualization Programming">
								Data Visualization Programming
							</option>
							<option value="Software Testing">Software Testing</option>
							<option value="Technology Entrepreneurship">
								Technology Entrepreneurship
							</option>
							<option value="Software Security">Software Security</option>
						</select>
					</div>
				</div>
			</div>

			{/* Text According to the selection */}
			<div className="w-full text-center py-8">
				<h1 className="text-2xl text-white font-semibold">
					view grades of <u>Emily Johnson</u> - Semester 1 (2021 - 2022) - Data
					Visualization Programming :
				</h1>
			</div>
		</div>
	);
};

export default AdvisorPage;
