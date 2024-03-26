"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import IntroSection from "./Components/IntroSection";
import { useState } from "react";
import Form from "./Components/Form";
// import { sendFile } from './Components/sendFile';

export default function Home() {
	const [file, setFile] = useState(null);
	const [responseMessage, setResponseMessage] = useState("");

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// Toggle dropdown function
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleFileChange = (event: any) => {
		const selectedFile = event.target.files[0];
		setFile(selectedFile);
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		if (!file) {
			console.log("No file selected");
			return;
		}

		const formData = new FormData();
		formData.append("file", file);

		try {
			const response = await fetch("http://127.0.0.1:5000/upload", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				const responseData = await response.json();
				console.log(responseData);
				setResponseMessage(responseData);
				console.log("File uploaded successfully");
			} else {
				console.error("Failed to upload file");
			}
		} catch (error) {
			console.error("Error uploading file:", error);
		}
	};

	return (
		<>
			<div
				className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed"
				style={{
					backgroundImage: "url('/assets/login-page.png')",
					// 'url("https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/6dc8b117-6b9f-4ab5-87b3-18ed1e8a15d0.jpg?alt=media")',
				}}
			>
				<Navbar />
				<IntroSection />

				<div className="mx-24">
					<div className="h-12"></div>
					{Banner()}
					<div className="h-12"></div>

					<div className="w-8/12">
						<div className="flex flex-row items-center space-x-12">
							<h2 className="text-white">Subject: </h2>
							<div className="relative inline-flex">
								<button
									id="hs-dropdown-right-but-left-on-lg"
									type="button"
									onClick={toggleDropdown} // Here we add the onClick handler
									className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-[#B379DF] shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								>
									<h2 className="text-[#B379DF]">Select Your Subject</h2>
									<svg
										className={`transform transition-transform ${
											isDropdownOpen ? "rotate-180" : "rotate-0"
										}`}
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="m6 9 6 6 6-6" />
									</svg>
								</button>
								<div className="hs-dropdown relative inline-flex">
									<button
										id="hs-dropdown-default"
										type="button"
										className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
									>
										Select Your Subject
										<svg
											className="hs-dropdown-open:rotate-180 size-4"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="m6 9 6 6 6-6" />
										</svg>
									</button>

									<div
										className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
										aria-labelledby="hs-dropdown-default"
									>
										<a
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
											href="#"
										>
											Subjet 1
										</a>
										<a
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
											href="#"
										>
											Subject 2
										</a>
										<a
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
											href="#"
										>
											Downloads
										</a>
										<a
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
											href="#"
										>
											Team Account
										</a>
									</div>
								</div>

								<div
									className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-0 end-0 start-auto lg:end-auto lg:start-0 min-w-64 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
									aria-labelledby="hs-dropdown-right-but-left-on-lg"
								>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
										href="#"
									>
										Data Visualisation
									</a>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
										href="#"
									>
										Purchases
									</a>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
										href="#"
									>
										Downloads
									</a>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
										href="#"
									>
										Team Account
									</a>
								</div>
							</div>
						</div>

						<div className="h-14"></div>
						<form onSubmit={handleSubmit}>
							<input
								type="file"
								id="fileInput"
								onChange={handleFileChange}
								style={{ display: "none" }} // Hides the input
							/>
							<label
								htmlFor="fileInput"
								className="btn text-white bg-gradient-to-r from-customPink to-customOrange hover:bg-gradient-to-br"
							>
								Choose File
							</label>

							<button type="submit">Upload</button>
						</form>

						{responseMessage && (
							<p className="text-white text-2xl">{responseMessage}</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
function Banner() {
	return (
		<div className="bg-gradient-to-r from-[#593598] to-[#DFCFF7] h-64 rounded-3xl p-12 flex flex-row items-center justify-between">
			<div className="h-full flex flex-col space-y-20 mr-8">
				<h5 className="text-white/50">December 7, 2023</h5>
				<div className="space-y-2">
					<h2 className="text-white font-bold text-2xl">Welcome back, John!</h2>
					<p className="text-white/50">
						Always stay updated in your STUDENT PORTAL
					</p>
				</div>
			</div>
			<div>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/bannerIllustrate.png?alt=media"
					alt=""
					width={300}
					height={300}
				/>
			</div>
		</div>
	);
}
