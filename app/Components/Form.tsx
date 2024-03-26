import React from "react";
import Link from "next/link";

import Navbar from "./Navbar";

const Form = () => {
	return (
		<div
		// className="min-h-screen flex items-center justify-center"
		// style={{
		// 	backgroundImage: "url('/assets/login-page.png')",
		// 	backgroundSize: "cover",
		// 	backgroundAttachment: "fixed",
		// }}
		>
			{/* Container for illustration and form */}
			<div className="flex w-full max-w-4xl mx-auto bg-transparent">
				{/* Illustration Container */}
				<div
					className="w-1/2 m-4"
					style={{
						backgroundImage: "url('/assets/illustration-phone.png')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				/>

				{/* Form Container */}
				<div className="w-1/2">
					<div
						className="bg-white p-8 rounded-xl shadow-xl"
						style={{
							backdropFilter: "blur(16px)",
							backgroundColor: "rgba(255, 255, 255, 0.2)",
							border: "1px solid rgba(255, 255, 255, 0.2)",
							boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
							color: "white",
						}}
					>
						{/* Form Heading */}
						<div className="text-center mb-10">
							<h1 className="text-4xl font-bold text-white-900 mb-2">
								Welcome to <br></br> Advisor Dashboard!
							</h1>
							<p className="text-customGray">login to access your account</p>
						</div>

						{/* Form Fields */}
						<form className="space-y-6">
							<div>
								<label
									htmlFor="email"
									className="text-sm font-medium text-customGray block mb-2"
								>
									Email Address
								</label>
								<input
									type="email"
									id="email"
									className="w-full p-4 text-sm text-customGray bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Email Address"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="password"
									className="text-sm font-medium text-customGray block mb-2"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									className="w-full p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Password"
									required
								/>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-customGray"
									>
										{" "}
										Remember me{" "}
									</label>
								</div>
								<div className="text-sm">
									<a href="#" className="text-customTurquoise  hover:underline">
										Forgot your password?
									</a>
								</div>
							</div>

							{/* <button
								type="submit"
								className="w-full text-white bg-gradient-to-r from-purple-600 to-customTurquoise hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
							>
								Sign in
							</button> */}

							<Link href="/admin/main">
								<button className="w-full text-white bg-gradient-to-r from-purple-600 to-customTurquoise hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center">
									Sign in
								</button>
							</Link>

							{/* <a
								href="admin/main"
								className="w-full text-white bg-gradient-to-r from-purple-600 to-customTurquoise hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
							>
								Sign in
							</a> */}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
