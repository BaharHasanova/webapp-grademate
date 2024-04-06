
import React from "react";
import Navbar from "../Components/Navbar";
import AdminTable from "@/Components/FirebaseUtils/Utils/AdminTable";

const AdminPage = () => {
	return (
		<div
		className="h-full w-full bg-no-repeat bg-cover  bg-center flex flex-col lg:p-12"
		style={{
		  backgroundImage: "url('/assets/login-page.png')",
		  backgroundSize: "cover"
		}}
	  >
			{/* Navbar - We ensure that the Navbar has a higher z-index */}
			<Navbar
				isHomePage={false}
				isLoginPage={false}
				pageType="adminPage"
				userName="Adam Johns"
			/>
			
			<div className="flex  min-h-screen flex-col lg:flex-row ">
				{/* Sidebar */}
				<div className="lg:w-64 bg-bannerColor mt-8 rounded-3xl space-y-2 p-12  overflow-hidden m-4 hidden lg:block">
					<div className="py-10   bg-gradient-to-t from-squareGradientDark to-squareGradientLight rounded-3xl mt-4 flex items-center justify-center">
						<img src="/assets/archive-icon.png" alt="" className="w-12 h-12"  />
					</div>
					{/* Sidebar contents wrapped in a container for better spacing */}
					<div className="space-y-4 py-8 ">
						<a
							href="#registration"
							className="flex items-center text-white py-2 rounded hover:bg-lightPurple"
						>
							<img className="h-6 w-6 mr-2 " src="/assets/pencil.svg" alt="" />
							<div className="">Registration</div>
						</a>
						<a
							href="#dashboard"
							className="flex items-center text-white py-2 rounded hover:text-bold"
						>
							<img
								className="h-6 w-6 mr-2"
								src="/assets/dashboard.svg"
								alt=""
							/>
							Dashboard
						</a>
						<a
							href="#drop"
							className="flex items-center text-white py-2 rounded hover:bg-lightPurple"
						>
							<img
								className="h-6 w-6 mr-2"
								src="/assets/documentx.svg"
								alt=""
							/>
							Drop
						</a>
					</div>
					<div>
						<a
							href="#logout"
							className="flex items-center text-white py-2 rounded hover:bg-lightPurple"
						>
							<img className="h-6 w-6 mr-2" src="/assets/logout.svg" alt="" />
							Logout
						</a>
					</div>
				</div>

				{/* Main Content */}
				<div className="w-full lg:w-[80%] pl-18">
					<div className="bg-bannerColor rounded-3xl m-8 p-12 flex justify-between items-center flex-col md:flex-row flex-col-reverse ">
						<div className="space-y-3">
							<h2 className="text-white font-bold  text-2xl lg:text-5xl">
								Welcome back, Admin!
							</h2>
							<p className="text-white/50 text-lg lg:text-2xl">
								Always stay updated in your <b>ADMIN PORTAL</b>
							</p>
							<h5 className="text-white/50 text-md lg:text-xl">December 7, 2023</h5>
						</div>
						<div>
							<img
								src="https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/bannerIllustrate.png?alt=media"
								alt=""
								className="pb-12"
							/>
						</div>
					</div>
					{/* Additional main content goes here */}
					<div className="px-24 text-white"><AdminTable></AdminTable></div>
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
