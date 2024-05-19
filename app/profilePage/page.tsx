"use client";

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import RecommendationComponent from "../Components/EvaluationComponent";

const ProfilePage = () => {
	// State to manage form data
	const [studentData, setStudentData] = useState({
		name: "",
		email: "",
		studentID: "",
		currentYear: "",
	});

	// const [analysisData, setAnalysisData] = useState(
	// 	"Recommendation:To enhance their skills further, the student is advised to focus on improving their understanding of frontend and backend technologies, UI/UX design, APIs, and performance optimization. Engaging in practical projects and seeking additional resources such as online courses, coding bootcamps, and industry tutorials can help the student strengthen their knowledge and practical application in these domains.Strengths: The student excels in theoretical subjects such as 'Discrete Mathematics' and 'Theory of Computation'. They have demonstrated a strong understanding of complex mathematical concepts like automata theory, formal languages, Turing machines, and computational complexity. Additionally, they have performed well in topics such as graph theory, combinatorics, and computational theory, which are essential for advanced computer science. Weaknesses: The student seems to face challenges in technical subjects such as 'Web Development' and 'Mobile Application Development'. While they have achieved satisfactory grades in these subjects, there is room for improvement in understanding topics like frontend and backend technologies, UI/UX design, APIs, and performance optimization. It may be beneficial for the student to dedicate more time to practice and hands-on projects in these areas."
	// );

	// Handle form input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setStudentData({
			...studentData,
			[name]: value,
		});
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Profile updated successfully!");
	};

	return (
		<div
			className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed"
			style={{ backgroundImage: "url('/assets/login-page.png')" }}
		>
			<Navbar
				isHomePage={false}
				isLoginPage={false}
				pageType="profilePage"
				userName="Student"
			/>

			<div className="min-h-screen bg-transparent flex items-center justify-center p-8">
				<div className="p-10 max-w-4xl w-full space-y-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg">
					{/* Top level flex container for profile summary and form */}
					<div className="flex flex-row justify-between space-x-12">
						{/* Profile Summary */}
						<div className="flex-initial  p-6 rounded-lg shadow-lg">
							<div className="text-center">
								<img
									className="size-[200px]  mx-auto mb-4 rounded-full border-4 border-purple-500"
									src="https://bootdey.com/img/Content/avatar/avatar7.png"
									alt="Avatar"
								/>
								<h2 className="text-xl font-semibold break-words text-white">
									{studentData.name || "Myrat Akyyev"}
								</h2>
								<p className="text-gray-300 break-words">
									{studentData.email || "SW01010101@uniten.edu.my"}
								</p>
								<p className="text-gray-300 break-words">
									{studentData.studentID || "SW01010101"}
								</p>
								<p className="text-gray-300 break-words">
									{studentData.currentYear || "2nd year"}
								</p>
							</div>
						</div>

						{/* Editable Form */}
						<div className="flex-grow">
							<h2 className="text-white text-2xl font-bold mb-6">
								Edit Profile
							</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label className="block text-sm font-medium text-gray-300">
										Full Name
									</label>
									<input
										type="text"
										name="name"
										value={studentData.name}
										onChange={handleInputChange}
										placeholder="Enter your full name"
										className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-300">
										Student Email
									</label>
									<input
										type="email"
										name="email"
										value={studentData.email}
										onChange={handleInputChange}
										placeholder="Enter your email"
										className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-300">
										Student ID
									</label>
									<input
										type="text"
										name="studentID"
										value={studentData.studentID}
										onChange={handleInputChange}
										placeholder="Enter your student ID"
										className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-300">
										Current Year
									</label>
									<input
										type="text"
										name="currentYear"
										value={studentData.currentYear}
										onChange={handleInputChange}
										placeholder="Enter your current year"
										className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>

								<button
									type="submit"
									className="w-full py-3 text-white bg-gradient-to-r from-buttonPurple to-buttonOrange hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg shadow-sm duration-200"
								>
									Save Changes
								</button>
							</form>
						</div>
					</div>

					{/* Analysis Section below the form */}
					<RecommendationComponent studentId="1" />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
