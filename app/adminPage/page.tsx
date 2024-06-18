"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Axios from "axios";
import AdminDashboard from "../Components/AdminDashboard"; // Import the AdminDashboard component
import DropDashboard from "../Components/AdminDrop"; // Import the DropDashboard component
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/navigation";

const formatDate = (date: Date) => {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return date.toLocaleDateString(undefined, options);
};

const AdminPage = () => {
	useAuth("admin");
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
					"https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/advisors"
				);
				setAdvisors(response.data);
			} catch (error) {
				console.error("Error fetching advisors:", error);
			}
		};

		const fetchPrograms = async () => {
			try {
				const response = await Axios.get(
					"https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/programs"
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
					"https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/student/register",
					studentData
				);
				setResponseMessage("Student registered successfully!");
			} else if (userType === "advisor") {
				const response = await Axios.post(
					"https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/advisor/register",
					advisorData
				);
				setResponseMessage("Advisor registered successfully!");
			}
		} catch (error) {
			console.error("Error registering user:", error);
			setResponseMessage("Error registering user.");
		}
	};
	const router = useRouter();

	const handleLogout = () => {
		if (window.confirm("Are you sure you want to logout?")) {
			router.push("/");
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
						<div className="w-64 bg-bannerColor rounded-3xl p-12 overflow-auto h-full">
							<div className="w-40 h-40 bg-gradient-to-t from-squareGradientDark to-squareGradientLight rounded-3xl mt-4 flex items-center justify-center">
								<img
									src="/assets/archive-icon.svg"
									alt=""
									width={70}
									height={70}
								/>
							</div>
							<div className="space-y-4 mt-8">
								<a
									onClick={() => setView("registration")}
									className={`sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple cursor-pointer ${
										view === "registration" ? "bg-lightPurple" : ""
									}`}
								>
									<img
										className="h-8 w-8 mr-2"
										src="/assets/pencil.svg"
										alt="Registration"
									/>
									Registration
								</a>
								<a
									onClick={() => setView("dashboard")}
									className={`sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple cursor-pointer ${
										view === "dashboard" ? "bg-lightPurple" : ""
									}`}
								>
									<img
										className="h-8 w-8 mr-2"
										src="/assets/dashboard.svg"
										alt="Dashboard"
									/>
									Dashboard
								</a>
								<a
									onClick={() => setView("drop")}
									className={`sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple cursor-pointer ${
										view === "drop" ? "bg-lightPurple" : ""
									}`}
								>
									<img
										className="h-8 w-8 mr-2"
										src="/assets/documentx.svg"
										alt="Drop"
									/>
									Drop
								</a>
							</div>
							<div className="mt-8">
								<a
									onClick={handleLogout}
									className="sidebar-link text-2xl flex items-center text-white py-4 rounded hover:bg-lightPurple"
								>
									<img
										className="h-8 w-8 mr-2"
										src="/assets/logout.svg"
										alt="Logout"
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
												className="bg-gradient-to-r from-purple-500 to-red-500 text-white py-2 px-4 rounded-lg"
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
		<div className="bg-bannerColor h-64 rounded-3xl p-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
			<div className="flex flex-col space-y-3">
				<h2 className="text-white font-bold text-5xl md:text-4xl sm:text-3xl">
					Welcome back, {userName}!
				</h2>
				<p className="text-white/50 text-xl md:text-lg sm:text-base mb-2 sm:mb-0">
					Always stay updated in your <b>ADMIN PORTAL</b>
				</p>
				<h5 className="text-white/50 text-lg md:text-base sm:text-sm">
					{formatDate(today)}
				</h5>
			</div>
			<div>
				<img
					src="assets/admin-elements.svg"
					alt="Banner Illustration"
					className="hidden sm:block w-48 sm:w-auto"
				/>
			</div>
		</div>
	);
}

export default AdminPage;
