import React from "react";
import Navbar from "../Components/Navbar";
import ExcelUploader from "../upload/page";

const AdminPage = () => {
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
				pageType="adminPage"
				userName="Admin"
			/>
			<div className="flex flex-grow min-h-screen">
				{/* Sidebar */}
				<div className="w-64 bg-bannerColor mt-8 ml-32 rounded-3xl space-y-2 p-12 overflow-auto">
					<div className="w-40 h-40 bg-gradient-to-t from-squareGradientDark to-squareGradientLight rounded-3xl mt-4 flex items-center justify-center">
						<img src="/assets/archive-icon.png" alt="" width={70} height={70} />
					</div>
					{/* Sidebar contents wrapped in a container for better spacing */}
					<div className="space-y-4 py-8">
						<a
							href="#registration"
							className="sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple"
						>
							<img className="h-8 w-8 mr-2" src="/assets/pencil.svg" alt="" />
							Registration
						</a>
						<a
							href="#dashboard"
							className="sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple"
						>
							<img
								className="h-8 w-8 mr-2"
								src="/assets/dashboard.svg"
								alt=""
							/>
							Dashboard
						</a>
						<a
							href="#drop"
							className="sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple"
						>
							<img
								className="h-8 w-8 mr-2"
								src="/assets/documentx.svg"
								alt=""
							/>
							Drop
						</a>
					</div>
					<div>
						<a
							href="#logout"
							className="sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple"
						>
							<img className="h-8 w-8 mr-2" src="/assets/logout.svg" alt="" />
							Logout
						</a>
					</div>
				</div>

				{/* Main Content */}
				<div className="flex-grow pl-18 pr-16">
					<div className="bg-bannerColor rounded-3xl m-8 p-12 flex justify-between items-center">
						<div className="space-y-3">
							<h2 className="text-white font-bold text-5xl">
								Welcome back, Admin!
							</h2>
							<p className="text-white/50 text-2xl">
								Always stay updated in your <b>ADMIN PORTAL</b>
							</p>
							<h5 className="text-white/50 text-xl">December 7, 2023</h5>
						</div>
						<div>
							<img
								src="assets/admin-elements.svg"
								alt=""
								// className="max-w-xs md:max-w-sm lg:max-w-lg"
								width={350}
								height={350}
							/>
						</div>
					</div>
					{/* Additional main content goes here */}
					<div className="p-24 text-white">
						<ExcelUploader></ExcelUploader>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
