"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Axios from "axios";
import AdminDashboard from "../Components/AdminDashboard"; // Import the AdminDashboard component
import DropDashboard from "../Components/AdminDrop"; // Import the DropDashboard component
import useAuth from '../hooks/useAuth';


const formatDate = (date: Date) => {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return date.toLocaleDateString(undefined, options);
};

const AdminPage = () => {
	useAuth('admin');
	const [userType, setUserType] = useState("");
	const [studentData, setStudentData] = useState({
		student_id: "",
		full_name: "",
		email: "",
		password: "",
		status: "Active",
		cgpa: "",
		gpa: "",
		advisor_id: "",
		program_id: "",
	});
	const [advisorData, setAdvisorData] = useState({
		advisor_id: "",
		full_name: "",
		email: "",
		password: "",
		status: "Active",
	});
	const [advisors, setAdvisors] = useState([]);
	const [programs, setPrograms] = useState([]);
	const [responseMessage, setResponseMessage] = useState("");
	const [view, setView] = useState("registration"); // State to manage view

	useEffect(() => {
		const fetchAdvisors = async () => {
			try {
				const response = await Axios.get(
					"http://127.0.0.1:5000/grademate/advisors"
				);
				setAdvisors(response.data);
			} catch (error) {
				console.error("Error fetching advisors:", error);
			}
		};

		const fetchPrograms = async () => {
			try {
				const response = await Axios.get(
					"http://127.0.0.1:5000/grademate/programs"
				);
				setPrograms(response.data);
			} catch (error) {
				console.error("Error fetching programs:", error);
			}
		};

		fetchAdvisors();
		fetchPrograms();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (userType === "student") {
			setStudentData((prevState) => ({ ...prevState, [name]: value }));
		} else if (userType === "advisor") {
			setAdvisorData((prevState) => ({ ...prevState, [name]: value }));
		}
	};

	const handleSubmit = async () => {
		try {
			if (userType === "student") {
				const response = await Axios.post(
					"http://127.0.0.1:5000/grademate/student/register",
					studentData
				);
				setResponseMessage("Student registered successfully!");
			} else if (userType === "advisor") {
				const response = await Axios.post(
					"http://127.0.0.1:5000/grademate/advisor/register",
					advisorData
				);
				setResponseMessage("Advisor registered successfully!");
			}
		} catch (error) {
			console.error("Error registering user:", error);
			setResponseMessage("Error registering user.");
		}
	};

	return (
		<div
			className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed flex flex-col"
			style={{
				backgroundImage: "url('/assets/login-page.png')",
			}}
		>
			<Navbar
				isHomePage={false}
				isLoginPage={false}
				pageType="adminPage"
				userName="Admin"
			/>
			<div className="flex flex-grow min-h-screen">
				<div className="flex-grow flex flex-col pl-18 pr-16">
					<div className="flex items-start space-x-8 mt-8 ml-32">
						<div className="w-64 bg-bannerColor rounded-3xl space-y-2 p-12 overflow-auto">
							<div className="w-40 h-40 bg-gradient-to-t from-squareGradientDark to-squareGradientLight rounded-3xl mt-4 flex items-center justify-center">
								<img
									src="/assets/archive-icon.png"
									alt=""
									width={70}
									height={70}
								/>
							</div>
							<div className="space-y-4 py-8">
								<a
									onClick={() => setView("registration")} // Change view to registration
									className={`sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple cursor-pointer ${
										view === "registration" ? "bg-lightPurple" : ""
									}`}
								>
									<img
										className="h-8 w-8 mr-2"
										src="/assets/pencil.svg"
										alt=""
									/>
									Registration
								</a>
								<a
									onClick={() => setView("dashboard")} // Change view to dashboard
									className={`sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple cursor-pointer ${
										view === "dashboard" ? "bg-lightPurple" : ""
									}`}
								>
									<img
										className="h-8 w-8 mr-2"
										src="/assets/dashboard.svg"
										alt=""
									/>
									Dashboard
								</a>
								<a
									onClick={() => setView("drop")} // Change view to drop
									className={`sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple cursor-pointer ${
										view === "drop" ? "bg-lightPurple" : ""
									}`}
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
									<img
										className="h-8 w-8 mr-2"
										src="/assets/logout.svg"
										alt=""
									/>
									Logout
								</a>
							</div>
						</div>

						<div className="flex-grow pl-18 pr-16">
							{view === "registration" ? (
								<>
									{Banner({ userName: "Admin" })}
									{/* Registration Form */}
									<div
										id="registration"
										className="m-8 p-12 bg-lightPurple rounded-lg"
									>
										<h2 className="text-3xl text-white mb-6">
											User Registration
										</h2>
										<div className="mb-4">
											<label className="block text-white text-xl mb-2">
												Select User Type:
											</label>
											<select
												value={userType}
												onChange={(e) => setUserType(e.target.value)}
												className="py-2 px-4 rounded bg-white text-gray-800 w-full"
											>
												<option value="">Select User Type</option>
												<option value="student">Student</option>
												<option value="advisor">Advisor</option>
											</select>
										</div>

										{userType === "student" && (
											<>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Student ID:
													</label>
													<input
														type="text"
														name="student_id"
														value={studentData.student_id}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													/>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Full Name:
													</label>
													<input
														type="text"
														name="full_name"
														value={studentData.full_name}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													/>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Email:
													</label>
													<input
														type="text"
														name="email"
														value={studentData.email}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													/>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Password:
													</label>
													<input
														type="password"
														name="password"
														value={studentData.password}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													/>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Status:
													</label>
													<select
														name="status"
														value={studentData.status}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													>
														<option value="Active">Active</option>
														<option value="Deactivated">Inactive</option>
													</select>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														CGPA:
													</label>
													<input
														type="number"
														name="cgpa"
														value={studentData.cgpa}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
														step="0.01"
													/>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														GPA:
													</label>
													<input
														type="number"
														name="gpa"
														value={studentData.gpa}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
														step="0.01"
													/>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Advisor:
													</label>
													<select
														name="advisor_id"
														value={studentData.advisor_id}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													>
														<option value="">Select Advisor</option>
														{advisors.map((advisor) => (
															<option
																key={advisor.advisor_id}
																value={advisor.advisor_id}
															>
																{advisor.full_name}
															</option>
														))}
													</select>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Program:
													</label>
													<select
														name="program_id"
														value={studentData.program_id}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													>
														<option value="">Select Program</option>
														{programs.map((program) => (
															<option
																key={program.program_id}
																value={program.program_id}
															>
																{program.program_name}
															</option>
														))}
													</select>
												</div>
											</>
										)}

										{userType === "advisor" && (
											<>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Advisor ID:
													</label>
													<input
														type="text"
														name="advisor_id"
														value={advisorData.advisor_id}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													/>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Full Name:
													</label>
													<input
														type="text"
														name="full_name"
														value={advisorData.full_name}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													/>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Email:
													</label>
													<input
														type="text"
														name="email"
														value={advisorData.email}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													/>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Password:
													</label>
													<input
														type="password"
														name="password"
														value={advisorData.password}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													/>
												</div>
												<div className="mb-4">
													<label className="block text-white text-xl mb-2">
														Status:
													</label>
													<select
														name="status"
														value={advisorData.status}
														onChange={handleInputChange}
														className="py-2 px-4 rounded bg-white text-gray-800 w-full"
													>
														<option value="Active">Active</option>
														<option value="Deactivated">Deactivated</option>
													</select>
												</div>
											</>
										)}

										<div className="text-center">
											<button
												onClick={handleSubmit}
												className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
											>
												Register{" "}
												{userType === "student" ? "Student" : "Advisor"}
											</button>
											{responseMessage && (
												<p className="text-white mt-4">{responseMessage}</p>
											)}
										</div>
									</div>
								</>
							) : view === "dashboard" ? (
								<AdminDashboard /> // Render the AdminDashboard component
							) : (
								<DropDashboard /> // Render the DropDashboard component
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function Banner({ userName }) {
	const today = new Date();
	return (
		<div className="bg-bannerColor h-64 rounded-3xl p-12 flex flex-row items-center justify-between">
			<div className="h-full flex flex-col space-y-5 mr-8 pl-8">
				<div className="space-y-3">
					<h2 className="text-white font-bold text-3xl">
						Welcome back,{userName}!
					</h2>
					<p className="text-white/50 text-2xl">
						Always stay updated in your <b>ADMIN PORTAL</b>
					</p>
				</div>
				<h5 className="text-white/50 text-xl">{formatDate(today)}</h5>
			</div>
			<div>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/bannerIllustrate.png?alt=media"
					alt=""
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
}

export default AdminPage;

// import React from "react";

// import Navbar from "../Components/Navbar";
// // import ExcelUploader from "../upload/page";

// const AdminPage = () => {
//   return (
//     <div
//       className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed flex flex-col"
//       style={{
//         backgroundImage: "url('/assets/login-page.png')",
//       }}
//     >
//       {/* Navbar - We ensure that the Navbar has a higher z-index */}
//       <Navbar
//         isHomePage={false}
//         isLoginPage={false}
//         pageType="adminPage"
//         userName="Admin"
//       />
//       <div className="flex flex-grow min-h-screen">
//         {/* Sidebar */}
//         <div className="w-64 bg-bannerColor mt-8 ml-32 rounded-3xl space-y-2 p-12 overflow-auto">
//           <div className="w-40 h-40 bg-gradient-to-t from-squareGradientDark to-squareGradientLight rounded-3xl mt-4 flex items-center justify-center">
//             <img src="/assets/archive-icon.png" alt="" width={70} height={70} />
//           </div>
//           {/* Sidebar contents wrapped in a container for better spacing */}
//           <div className="space-y-4 py-8">
//             <a
//               href="#registration"
//               className="sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple"
//             >
//               <img className="h-8 w-8 mr-2" src="/assets/pencil.svg" alt="" />
//               Registration
//             </a>
//             <a
//               href="#dashboard"
//               className="sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple"
//             >
//               <img
//                 className="h-8 w-8 mr-2"
//                 src="/assets/dashboard.svg"
//                 alt=""
//               />
//               Dashboard
//             </a>
//             <a
//               href="#drop"
//               className="sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple"
//             >
//               <img
//                 className="h-8 w-8 mr-2"
//                 src="/assets/documentx.svg"
//                 alt=""
//               />
//               Drop
//             </a>
//           </div>
//           <div>
//             <a
//               href="#logout"
//               className="sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple"
//             >
//               <img className="h-8 w-8 mr-2" src="/assets/logout.svg" alt="" />
//               Logout
//             </a>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-grow pl-18 pr-16">
//           <div className="bg-bannerColor rounded-3xl m-8 p-12 flex justify-between items-center">
//             <div className="space-y-3">
//               <h2 className="text-white font-bold text-5xl">
//                 Welcome back, Admin!
//               </h2>
//               <p className="text-white/50 text-2xl">
//                 Always stay updated in your <b>ADMIN PORTAL</b>
//               </p>
//               <h5 className="text-white/50 text-xl">December 7, 2023</h5>
//             </div>
//             <div>
//               <img
//                 src="assets/admin-elements.svg"
//                 alt=""
//                 // className="max-w-xs md:max-w-sm lg:max-w-lg"
//                 width={350}
//                 height={350}
//               />
//             </div>
//           </div>
//           {/* Additional main content goes here */}
//           {/* <div className="p-24 text-white">
// 						<ExcelUploader></ExcelUploader>
// 					</div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;
