"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useRouter, usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Axios from "axios";
import GradesTable from "../Components/GradesTable";
import GradePercentage from "../Components/GradesPercentage";
import RegisterComponent from "../Components/Register";
import useAuth from '../hooks/useAuth';


// Utility function to format the date
const formatDate = (date: Date) => {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return date.toLocaleDateString(undefined, options);
};

interface Semester {
	semester_id: number;
	name: string;
}

interface Advisee {
	student_id: string;
	full_name: string;
}

interface Subject {
	semester_id: number;
	name: string;
	subject_id: number;
}

const AdvisorPage = () => {
	useAuth("advisor");

	const [semesters, setSemesters] = useState<Semester[]>([]);
	const [advisees, setAdvisees] = useState<Advisee[]>([]);
	const [subjects, setSubjects] = useState<Subject[]>([]);
	const [advisorId, setAdvisorId] = useState("");
	const [selectedAdvisee, setSelectedAdvisee] = useState("");
	const [selectedSemester, setSemesterId] = useState("");
	const [assessments, setAssessments] = useState([]);
	const [selectedSubject, setSelectedSubject] = useState("");
	const [showGrades, setShowGrades] = useState(false);
	const [gradePercentage, setGradePercentage] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();
	const [currentView, setCurrentView] = useState("dashboard");
	const [searchTerm, setSearchTerm] = useState("");
	const [data, setData] = useState([]);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const [unassignedStudents, setUnassignedStudents] = useState([]);
	const [selectedStudent, setSelectedStudent] = useState("");
	const [unassignedSearchTerm, setUnassignedSearchTerm] = useState("");
	const [showUnassignedStudents, setShowUnassignedStudents] = useState(false);


    const handleNewData = (newData) => {
        setData(newData);
        console.log("New data received:", newData);
    };

	const handleRowClick = (studentId: string) => {
		setSelectedAdvisee(studentId);
		setCurrentView("advisees");
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const [currentPage, setCurrentPage] = useState(1);
	const adviseesPerPage = 10; // You can change this number to your preferred items per page
	const filteredAdvisees = advisees.filter((advisee) =>
		advisee.full_name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const indexOfLastAdvisee = currentPage * adviseesPerPage;
	const indexOfFirstAdvisee = indexOfLastAdvisee - adviseesPerPage;
	const currentAdvisees = filteredAdvisees.slice(
		indexOfFirstAdvisee,
		indexOfLastAdvisee
	);

	const nextPage = () => {
		if (currentPage < Math.ceil(filteredAdvisees.length / adviseesPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const fetchUnassignedStudents = async () => {
		setIsLoading(true);
		try {
			const response = await Axios.get("https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/advisor/fetch_students");
			setUnassignedStudents(response.data);
			setShowUnassignedStudents(true); // Automatically show this view when data is fetched
		} catch (error) {
			console.error("Failed to fetch unassigned students:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const filteredUnassignedStudents = unassignedStudents.filter(student =>
		student.full_name.toLowerCase().includes(unassignedSearchTerm.toLowerCase())
	);
	

	const assignStudent = async (studentId) => {
		if (!studentId) {
			alert("Please select a student first.");
			return;
		}
	
		setIsLoading(true);
	
		try {
			const response = await Axios.post("https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/advisor/add_advisee", {
				advisor_id: advisorId,
				student_id: studentId
			});
	
			if (response.status === 200) {
				alert("Student assigned successfully.");
				fetchUnassignedStudents(); // Refetch the list of unassigned students to update the table
			} else {
				alert("Failed to assign student. Please try again.");
			}
		} catch (error) {
			console.error("Failed to assign student:", error);
			alert("Failed to assign student.");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (currentView === "advisees" && selectedAdvisee) {
			const adviseeExists = advisees.some((advisee) => advisee.student_id === selectedAdvisee);
			if (!adviseeExists && advisees.length > 0) {
				setSelectedAdvisee(advisees[0].student_id);
			}
		}
	}, [currentView, selectedAdvisee, advisees]);


	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const decoded = jwtDecode(token);
			setAdvisorId(decoded.advisor_id); // Assuming 'advisorId' is stored in the token
		}
	}, []);

	useEffect(() => {
		if (advisorId) {
			const fetchAdvisees = async () => {
				try {
					const response = await Axios.get(
						"https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/advisor/students",
						{ params: { advisor_id: advisorId } }
					);
					console.log("Advisees data:", response.data);
					setAdvisees(response.data);
	
					if (response.data.length > 0) {
						if (selectedAdvisee) {
							const adviseeExists = response.data.some(
								(advisee) => advisee.student_id === selectedAdvisee
							);
							if (!adviseeExists) {
								setSelectedAdvisee(response.data[0].student_id);
							}
						} else {
							setSelectedAdvisee(response.data[0].student_id);
						}
	
						if (response.data[0].current_semester) {
							setSemesterId(response.data[0].current_semester.toString());
						}
					}
				} catch (error) {
					console.error("Failed to fetch advisees:", error);
				}
			};
			fetchAdvisees();
		}
	}, [advisorId, selectedAdvisee]);

	useEffect(() => {
		const currentAdvisee = advisees.find(a => a.student_id === selectedAdvisee);
		if (currentAdvisee) {
			const fetchSemesters = async () => {
				try {
					const response = await Axios.get(
						`http://127.0.0.1:5000/grademate/advisor/student/semesters`,
						{ params: { student_id: selectedAdvisee } }
					);
					setSemesters(response.data);
					if (response.data.length > 0) {
						// Set the selectedSemester to the first semester of the new advisee
						setSemesterId(response.data[0].semester_id.toString());
					} else {
						// If no semesters found, reset selectedSemester
						setSemesterId('');
					}
				} catch (error) {
					console.error("Failed to fetch semesters:", error);
					setSemesters([]);
					setSemesterId(''); // Reset if there's an error fetching
				}
			};
			fetchSemesters();
		}
	}, [selectedAdvisee, advisees]);

	useEffect(() => {
		let isMounted = true; // This will help in avoiding setting state on unmounted component
	
		const fetchSubjects = async () => {
			if (selectedSemester) { // Ensure there's a selected semester
				setIsLoading(true); // Indicate loading subjects
				try {
					const response = await Axios.get(
						`http://127.0.0.1:5000/grademate/advisor/student/semester/classes`,
						{ params: { semester_id: selectedSemester } }
					);
					if (isMounted) {
						setSubjects(response.data); // Set subjects only if component is still mounted
					}
				} catch (error) {
					console.error("Failed to fetch subjects:", error);
					if (isMounted) {
						setSubjects([]); // Handle error in fetching subjects
					}
				} finally {
					if (isMounted) {
						setIsLoading(false); // Ensure to turn off loading indicator
					}
				}
			} else {
				if (isMounted) {
					setSubjects([]); // Reset subjects if semester is not selected
				}
			}
		};
	
		fetchSubjects();
	
		return () => {
			isMounted = false; // Cleanup function to mark component as unmounted
		};
	}, [selectedSemester]); // Only re-run the effect if selectedSemester changes

	const fetchAssessments = async () => {
		if (selectedSubject && selectedAdvisee) {
			setAssessments([]);
			setIsLoading(true);
			setError("");
			setGradePercentage(0);  // Reset to 0 before fetching new data
	
			try {
				const assessmentsResponse = await Axios.get(
					"https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/subject/assessments",
					{ params: { subject_id: selectedSubject } }
				);
	
				const gradesResponse = await Axios.get(
					"https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/student/assessment_grades",
					{
						params: {
							subject_id: selectedSubject,
							student_id: selectedAdvisee,
						},
					}
				);
	
				const combinedAssessments = assessmentsResponse.data.map((assessment) => {
					const achievedGradeData = gradesResponse.data[1].find(
						(grade) => grade.assessment_id === assessment.assessment_id
					);
					return {
						type: assessment.type,
						max_grade: `${assessment.max_grade}`,
						achievedGrade: achievedGradeData
							? achievedGradeData.achieved_grade
							: "N/A",
					};
				});
	
				console.log("Combined Assessments:", combinedAssessments); // Debugging
				console.log("Grade Percentage:", gradesResponse.data[0].grade_percentage || 0); // Debugging
	
				setAssessments(combinedAssessments);
				setGradePercentage(gradesResponse.data[0].grade_percentage || 0);  // Use 0 if undefined
				setShowGrades(true);
			} catch (error) {
				console.error("Failed to fetch assessments:", error);
				setError("Failed to load data.");
			}
			setIsLoading(false);
		}
	};

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
				pageType="AdvisorPage"
				userName="Advisor"
			/>

		<div className="flex flex-row h-full p-8 space-x-4">
			<aside className="w-64 bg-bannerColor rounded-3xl space-y-2 p-12 overflow-auto">
					<div className="w-40 h-40 bg-gradient-to-t from-squareGradientDark to-squareGradientLight rounded-3xl mt-4 flex items-center justify-center">
						<img src="/assets/archive-icon.png" alt="" width={70} height={70} />
					</div>
					<a
						onClick={() => setCurrentView("dashboard")}
						className={`sidebar-link text-2xl flex items-center py-4 rounded hover:bg-lightPurple cursor-pointer ${
							currentView === "dashboard" ? "active" : ""
						}`}
					>
						<img className="h-8 w-8 mr-2" src="/assets/dashboard.svg" alt="" />
						Dashboard
					</a>
					<a
						onClick={() => setCurrentView("registration")}
						className={`sidebar-link text-2xl flex items-center py-4 rounded hover:bg-lightPurple cursor-pointer ${
							currentView === "registration" ? "active" : ""
						}`}
					>
						<i className="fas fa-user-plus mr-2"></i>
						Registration
					</a>
					<a
						onClick={() => setCurrentView("advisees")}
						className={`sidebar-link text-2xl flex items-center py-4 rounded hover:bg-lightPurple cursor-pointer ${
							currentView === "advisees" ? "active" : ""
						}`}
					>
						<i className="fas fa-user-friends mr-2"></i>
						Advisees
					</a>
					<a
						onClick={handleLogout}
						className="sidebar-link text-2xl flex items-center text-gray-300 py-4 rounded hover:bg-lightPurple"
					>
						<img className="h-8 w-8 mr-2" src="/assets/logout.svg" alt="" />
						Logout
					</a>
				</aside>
				<main className="flex-1 p-8 bg-white bg-opacity-5 rounded-3xl shadow-lg">
				
				<Banner userName="Advisor" />
				{currentView === "advisees" && (
					<>
						<div className="mx-24 mt-8 flex justify-between items-end">
							<div className="select-container">
								<h2 className="text-white mb-6 text-2xl">Student Name: </h2>
								<select
									id="advisee-select"
									value={selectedAdvisee} // Use value to control the selected option
									onChange={(e) => setSelectedAdvisee(e.target.value)}
									className="select-style"
								>
									<option value="" disabled>
										Select Your Advisee
									</option>
									{advisees.map((advisee) => (
										<option key={advisee.student_id} value={advisee.student_id}>
											{advisee.full_name}
										</option>
									))}
								</select>
							</div>
							<div className="select-container">
								<h2 className="text-white mb-6 text-2xl">Semester: </h2>
								<select
									id="semester-select"
									value={selectedSemester}
									onChange={(e) => setSemesterId(e.target.value)}
									className="select-style"
									disabled={!selectedAdvisee}
								>
									<option value="" disabled>
										Select Semester
									</option>
									{semesters.map((semester) => (
										<option key={semester.semester_id} value={semester.semester_id.toString()}>
											{semester.name}
										</option>
									))}
								</select>
							</div>
							<div className="select-container">
								<h2 className="text-white mb-6 text-2xl">Subject Name: </h2>
								<select
									id="subject-select"
									onChange={(e) => setSelectedSubject(e.target.value)}
									defaultValue={""}
									className="select-style"
									disabled={!selectedSemester}
								>
									<option value="" disabled>
										Select Subject
									</option>
									{subjects.map((subject) => (
										<option key={subject.semester_id} value={subject.subject_id}>
											{subject.name}
										</option>
									))}
								</select>
							</div>
							<div className="button-container">
								{selectedSubject && (
									<div className="flex flex-col ml-4 mb-6 w-full">
										<button
											onClick={fetchAssessments}
											className="py-3 px-10 text-white bg-gradient-to-r from-purple-600 to-customTurquoise hover:bg-gradient-to-br font-bold rounded disabled:bg-blue-300"
											style={{ maxWidth: "250px" }}
											disabled={!selectedSubject || isLoading}
										>
											{isLoading ? "Loading..." : "View Grades"}
										</button>
									</div>
								)}
							</div>
						</div>
						{showGrades && (
							<div className="flex flex-wrap justify-around items-start mt-12">
								<div className="w-full md:w-[60%] mt-20" style={{ minHeight: "500px" }}>
									<GradesTable grades={assessments} />
								</div>
								<div style={{ width: "330px", height: "330px", marginTop: "0px" }}>
									<GradePercentage percentage={gradePercentage} />
								</div>
							</div>
						)}
					</>
				)}
				{currentView === "dashboard" && (
						<>
							<div className="m-4 flex justify-between items-center">
								<div className="relative">
									<input
										type="text"
										placeholder="Search by Name"
										value={searchTerm}
										onChange={handleSearchChange}
										className="p-2 border border-gray-300 rounded-xl bg-transparent text-white w-64 pr-10"
									/>
									<span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
										<i className="fas fa-search text-white"></i>
									</span>
								</div>

								<div className="m-4 flex justify-between items-center">
									<button
										className="bg-gradient-to-r from-purple-500 to-red-500 text-white py-2 px-4 rounded-lg"
										onClick={() => {
											fetchUnassignedStudents();
											setCurrentView("registration");
										}}
									>
										Add New
									</button>
								</div>

								{isDropdownVisible && (
									<div>
										<select
											value={selectedStudent}
											onChange={(e) => setSelectedStudent(e.target.value)}
											className="select-style"
										>
											<option value="">Select a Student</option>
											{unassignedStudents.map((student) => (
												<option key={student.student_id} value={student.student_id}>
													{student.full_name}
												</option>
											))}
										</select>
										<button
											className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
											onClick={assignStudent}
										>
											Assign Student
										</button>
									</div>
								)}
							</div>
							<div className="overflow-x-auto shadow-md rounded-lg">
								<table className="min-w-full bg-gray-800 text-white">
									<thead>
										<tr>
											<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">
												#
											</th>
											<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">
												Student ID
											</th>
											<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">
												Name
											</th>
											<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">
												Email
											</th>
											<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">
												Status
											</th>
											<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">
												CGPA
											</th>
											<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">
												GPA
											</th>
											<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">
												Semester
											</th>
										</tr>
									</thead>
									<tbody>
										{currentAdvisees.map((advisee, index) => (
											<tr
												key={advisee.student_id}
												className="hover:bg-gray-700 cursor-pointer"
												onClick={() => handleRowClick(advisee.student_id)}
											>
												<td className="px-6 py-4 border-b border-gray-700">
													{index + 1 + indexOfFirstAdvisee}
												</td>
												<td className="px-6 py-4 border-b border-gray-700">
													{advisee.student_id}
												</td>
												<td className="px-6 py-4 border-b border-gray-700">
													{advisee.full_name}
												</td>
												<td className="px-6 py-4 border-b border-gray-700">
													{advisee.email}
												</td>
												<td className="px-6 py-4 border-b border-gray-700">
													{advisee.status ? "Active" : "Inactive"}
												</td>
												<td className="px-6 py-4 border-b border-gray-700">
													{advisee.cgpa || "N/A"}
												</td>
												<td className="px-6 py-4 border-b border-gray-700">
													{advisee.gpa || "N/A"}
												</td>
												<td className="px-6 py-4 border-b border-gray-700">
													{advisee.current_semester || "N/A"}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="mt-4 flex justify-center items-center space-x-2">
								<button
									onClick={prevPage}
									disabled={currentPage === 1}
									className={`p-2 border border-gray-300 rounded ${
										currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
									} text-white`}
								>
									<i className="fas fa-arrow-left"></i>
								</button>
								{[...Array(Math.ceil(filteredAdvisees.length / adviseesPerPage)).keys()].map((number) => (
									<button
										key={number + 1}
										onClick={() => setCurrentPage(number + 1)}
										className={`p-2 border border-gray-300 rounded ${
											currentPage === number + 1 ? "bg-gray-500" : "bg-gray-800"
										} text-white`}
									>
										{number + 1}
									</button>
								))}
								<button
									onClick={nextPage}
									disabled={currentPage === Math.ceil(filteredAdvisees.length / adviseesPerPage)}
									className={`p-2 border border-gray-300 rounded ${
										currentPage === Math.ceil(filteredAdvisees.length / adviseesPerPage)
											? "cursor-not-allowed opacity-50"
											: ""
									} text-white`}
								>
									<i className="fas fa-arrow-right"></i>
								</button>
							</div>
						</>
					)}
					{currentView === "registration" && (
						<>
							<RegisterComponent onNewData={handleNewData} />
							
							{isLoading ? (
								<p>Loading...</p>
							) : (
								<>
									<div className="m-4">
										<input
											type="text"
											placeholder="Search by Name"
											value={unassignedSearchTerm}
											onChange={e => setUnassignedSearchTerm(e.target.value)}
											className="p-2 border border-gray-300 rounded-xl bg-transparent text-white w-64 mb-4"
										/>
										<div className="overflow-x-auto shadow-md rounded-lg">
											<table className="min-w-full bg-gray-800 text-white">
												<thead>
													<tr>
														<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">#</th>
														<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">Student ID</th>
														<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">Name</th>
														<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">Email</th>
														<th className="px-6 py-3 border-b-2 border-gray-700 text-left leading-4 text-gray-300 tracking-wider">Assign</th>
													</tr>
												</thead>
												<tbody>
													{filteredUnassignedStudents.map((student, index) => (
														<tr key={student.student_id} className="hover:bg-gray-700 cursor-pointer">
															<td className="px-6 py-4 border-b border-gray-700">{index + 1}</td>
															<td className="px-6 py-4 border-b border-gray-700">{student.student_id}</td>
															<td className="px-6 py-4 border-b border-gray-700">{student.full_name}</td>
															<td className="px-6 py-4 border-b border-gray-700">{student.email}</td>
															<td className="px-6 py-4 border-b border-gray-700">
															<button
																className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
																onClick={() => assignStudent(student.student_id)}
															>
																Assign
															</button>
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
								</>
							)}
						</>
					)}
				{/* {currentView === "registration" && (
					<RegisterComponent onNewData={handleNewData}  />
				)} */}
					{/* : currentView === "registration" ? (
						
					) : null */}
				</main>
			</div>
		</div>
	);
};

function Banner({ userName }) {
	const today = new Date();
	return (
		<div className="bg-bannerColor h-64 rounded-3xl p-12 flex flex-row items-center justify-between">
			<div className="h-full flex flex-col space-y-12 mr-8 pl-8">
				<div className="space-y-3">
					<h2 className="text-white font-bold text-5xl">
						Welcome back, {userName}!
					</h2>
					<p className="text-white/50 text-2xl">
						Always stay updated in your <b>ADVISOR DASHBOARD</b>
					</p>
				</div>
				<h5 className="text-white/50 text-xl">{formatDate(today)}</h5>
			</div>
			<div>
				<img
					src="assets/advisor-elements.svg"
					alt="Banner Illustration"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
}

export default AdvisorPage;