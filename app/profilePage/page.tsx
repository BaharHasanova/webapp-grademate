"use client";

import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../Components/Navbar";
import RecommendationComponent from "../Components/EvaluationComponent";
import { useRouter } from "next/navigation";

import { jwtDecode } from "jwt-decode"; // Ensure jwtDecode is correctly imported

const ProfilePage = () => {
	const [studentData, setStudentData] = useState(null);
	const [programName, setProgramName] = useState("");
	const [semester, setSemester] = useState("");
	const [showRecommendations, setShowRecommendations] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const decoded = jwtDecode(token);
			const studentId = decoded.student_id; // Assumed to be in the token
			fetchStudentData(studentId);
		}
	}, []);

	const fetchStudentData = async (studentId) => {
		try {
			const response = await Axios.get(
				`https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/student/${studentId}`
			);
			setStudentData(response.data.student);
			setProgramName(response.data.program_name);
			setSemester(response.data.semester);
		} catch (error) {
			console.error("Failed to fetch student data:", error);
		}
	};

	const handleShowRecommendations = () => {
		setShowRecommendations(true);
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
				userName={studentData ? studentData.full_name : "Student"}
			/>

			<div className="min-h-screen bg-transparent flex items-center justify-center p-8">
				<div className="p-10 max-w-4xl w-full space-y-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg">
					{studentData ? (
						<div className="text-center p-6 rounded-lg shadow-lg">
							<img
								className="size-[200px] mx-auto mb-4 rounded-full border-4 border-purple-500"
								src="https://bootdey.com/img/Content/avatar/avatar7.png"
								alt="Avatar"
							/>
							<h2 className="text-xl font-semibold break-words text-white">
								{studentData.full_name}
							</h2>
							<p className="text-gray-300 break-words">{studentData.email}</p>
							<p className="text-gray-300 break-words">
								{studentData.student_id}
							</p>
							<p className="text-gray-300 break-words">{programName}</p>
							<p className="text-gray-300 break-words">{semester}</p>
							<p className="text-gray-300 break-words">
								CGPA: {studentData.cgpa || "Not Available"}
							</p>
							<p className="text-gray-300 break-words">
								GPA: {studentData.gpa || "Not Available"}
							</p>
							<p className="text-gray-300 break-words">
								Status: {studentData.status ? "Active" : "Inactive"}
							</p>
							<button
								onClick={handleShowRecommendations}
								className="mt-4 py-2 px-6 bg-blue-600 hover:bg-blue-800 rounded text-white"
							>
								Show Recommendations
							</button>
						</div>
					) : (
						<p>Loading student data...</p>
					)}

					{/* Conditionally render RecommendationComponent */}
					{showRecommendations && studentData && (
						<RecommendationComponent studentId={studentData.student_id} />
					)}

					{/* Back Button */}
					<button
						onClick={() => router.back()}
						className="mt-4 py-2 px-6 bg-transparent border border-white rounded text-white"
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
