"use client"; // This line is correct if you're intentionally using React Server Components and client components.
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { jwtDecode } from "jwt-decode";
import Axios from "axios";
import GradesTable from "../Components/GradesTable";
import GradePercentage from "../Components/GradesPercentage";
import useAuth from '../hooks/useAuth';


const formatDate = (date: Date) => {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return date.toLocaleDateString(undefined, options);
};

interface Assessment {
	assessment_id: number;
	type: string;
	max_grade: number;
}

interface ClassCode {
	subject_id: number;
	name: string;
}

interface DecodedToken {
	name: string;
	student_id: string;
}

export default function StudentPage() {
	useAuth("student");

	const [file, setFile] = useState(null);
	const [responseMessage, setResponseMessage] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [data, setData] = useState([]);
	const [columns, setColumns] = useState([]);
	const [studentName, setStudentName] = useState("");
	const [studentId, setStudentId] = useState("");
	const [classCodes, setClassCodes] = useState<ClassCode[]>([]);
	const [selectedAssessment, setSelectedAssessment] = useState("");
	const [newGrade, setNewGrade] = useState("");
	const [selectedSubject, setSelectedSubject] = useState("");
	const [assessmentsPass, setAssessmentsPass] = useState<Assessment[]>([]);
	const [assessments, setAssessments] = useState([]);
	const [gradePercentage, setGradePercentage] = useState(0);
	const [showGrades, setShowGrades] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [grades, setGrades] = useState([]);
	const [newAssessmentType, setNewAssessmentType] = useState("");
	const [newMaxGrade, setNewMaxGrade] = useState("");

	// JWT Decode
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const decoded = jwtDecode(token);
			setStudentName(decoded.name); // adjust depending on how the claim is named
			setStudentId(decoded.student_id);
		}
	}, []); // The empty array ensures this effect runs once on mount

	useEffect(() => {
		console.log("Current selectedAssessment:", selectedAssessment);
	}, [selectedAssessment]);

	useEffect(() => {
		console.log("Updated selectedAssessment:", selectedAssessment);
	}, [selectedAssessment]);

	useEffect(() => {
		// Fetch class codes based on student ID
		const fetchClassCodes = async () => {
			if (!studentId) return;
			try {
				const response = await Axios.get(
					"http://127.0.0.1:5000/grademate/student/class_code",
					{ params: { student_id: studentId } }
				);
				setClassCodes(response.data);
			} catch (error) {
				console.error("Error fetching class codes:", error);
				// Handle error state
			}
		};

		fetchClassCodes();
	}, [studentId]); // Re-fetch when studentId changes

	const fetchAssessmentsTable = async () => {
		if (selectedSubject && studentId) {
			setAssessments([]);
			setIsLoading(true); // Start loading
			setError(""); // Clear previous errors
			setGradePercentage(0); // Reset to 0 before fetching new data
	
			try {
				const assessmentsResponse = await Axios.get(
					"http://127.0.0.1:5000/grademate/subject/assessments",
					{ params: { subject_id: selectedSubject } }
				);
	
				const gradesResponse = await Axios.get(
					"http://127.0.0.1:5000/grademate/student/assessment_grades",
					{
						params: {
							subject_id: selectedSubject,
							student_id: studentId,
						},
					}
				);
	
				const combinedAssessments = assessmentsResponse.data.map((assessment) => {
					const achievedGradeData = gradesResponse.data[1].find(
						(grade) => grade.assessment_id === assessment.assessment_id
					);
					return {
						assessment_id: assessment.assessment_id,
						type: assessment.type,
						max_grade: `${assessment.max_grade}`,
						achievedGrade: achievedGradeData
							? achievedGradeData.achieved_grade
							: "-", // Show "N/A" if no grade is found
					};
				});
	
				setAssessments(combinedAssessments);
				setGradePercentage(gradesResponse.data[0].grade_percentage || 0); // Use backend data or 0 if undefined
	
				setShowGrades(true); // Show grades table and percentage
			} catch (error) {
				console.error("Failed to fetch assessments:", error);
				setError("Failed to load data."); // Set an error message
			}
			setIsLoading(false); // End loading
		}
	};

	// API call for fetching ASSESSMENTS for second dropdown
	useEffect(() => {
		if (selectedSubject) {
			const fetchAssessments = async () => {
				try {
					const response = await Axios.get(
						`http://127.0.0.1:5000/grademate/subject/assessments`,
						{ params: { subject_id: selectedSubject } }
					);
					setAssessmentsPass(response.data);
					console.log("ASSESSMENTS ARE HERE");
					console.log(response.data);
				} catch (error) {
					console.error("Error fetching assessments:", error);
				}
			};
			fetchAssessments();
			fetchAssessmentsTable();
		}
	}, [selectedSubject]); // Rerun this effect when selectedSubject changes

	// API Call to save new grade
	const saveGrade = async () => {
		// Ensure that both the assessment and the new grade are selected
		if (!selectedAssessment || !newGrade) {
			alert("Please select an assessment and enter a grade.");
			return;
		}
	
		setIsLoading(true); // Start loading
		setError(""); // Clear previous errors
	
		try {
			const response = await fetch("http://127.0.0.1:5000/grademate/grade/save_grade", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					studentId: studentId,
					selectedAssessment: selectedAssessment,
					newGrade: newGrade
				}),
			});
	
			const data = await response.json();
	
			if (response.status === 200) {
				console.log("Grade saved successfully");
				fetchAssessmentsTable(); // Fetch the updated table data
				setNewGrade(""); // Reset the new grade input
				setSelectedAssessment(""); // Reset the selected assessment
			} else {
				console.error("Failed to save grade:", data.error || "An error occurred");
				setError(data.error || "Failed to save grade."); // Set an error message
				alert(data.error || "Failed to save grade."); // Display an alert with the error
			}
		} catch (error) {
			console.error("Error saving grade:", error);
			setError("Error saving grade."); // Set an error message
			alert("Error saving grade."); // Display an alert with the error
		}
	
		setIsLoading(false); // End loading
	};
	// Function to handle the submission of the new assessment
	const handleNewAssessmentSubmit = async (e) => {
		e.preventDefault();

		if (!newAssessmentType || !newMaxGrade) {
			alert("Please enter the assessment type and max grade.");
			return;
		}

		try {
			const response = await Axios.post(
				"http://127.0.0.1:5000/grademate/subject/assessment",
				{
					type: newAssessmentType,
					max_grade: newMaxGrade,
					subject_id: selectedSubject,
				}
			);

			if (response.status === 200) {
				console.log("Assessment added successfully");
				// Clear the form fields
				setNewAssessmentType("");
				setNewMaxGrade("");

				// Fetch the updated assessments list to include the new assessment
				const fetchAssessments = async () => {
					const response = await Axios.get(
						`http://127.0.0.1:5000/grademate/subject/assessments`,
						{ params: { subject_id: selectedSubject } }
					);
					setAssessmentsPass(response.data);
					console.log("Updated assessments:", response.data);
				};

				await fetchAssessments(); // Update assessments for dropdown
				await fetchAssessmentsTable(); // Update assessments for table
			} else {
				console.error("Failed to add assessment:", response.status);
			}
		} catch (error) {
			console.error("Error adding assessment:", error);
		}
	};

	return (
		<div
			className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed"
			style={{ backgroundImage: "url('/assets/login-page.png')" }}
		>
			<Navbar
				isHomePage={false}
				isLoginPage={false}
				pageType="studentPage"
				userName={studentName}
			/>

			<div className="mx-24">
				<div className="h-12"></div>
				{Banner({ userName: studentName })}

				<div className="h-12"></div>

				<div className="w-10/12 mx-auto">
					<div className="flex flex-row items-center space-x-12">
						<h2 className="text-white text-2xl">Subject: </h2>
						<div className="relative inline-flex">
						<select
							id="subject-select"
							value={selectedSubject}
							onChange={(e) => {
								console.log("Selected Subject Changed:", e.target.value);
								setSelectedSubject(e.target.value);
							}}
							className="select-style"
						>
							<option value="" disabled hidden>Select Your Subject</option>
							{classCodes.map((classCode) => (
								<option key={classCode.subject_id} value={classCode.subject_id}>
									{classCode.name}
								</option>
							))}
						</select>
						</div>
					</div>

					{/* Table and circle percentage */}
					{showGrades && (
						<div className="flex flex-wrap justify-around items-center">
							<div className="w-full md:w-[40%]">
								<GradesTable grades={assessments} />
							</div>
							<div style={{ width: "330px", height: "330px" }}>
								<GradePercentage percentage={gradePercentage} />
							</div>
						</div>
					)}

					<div className="mx-24 my-8">
						{/* Dropdown for selecting assessment */}
						{selectedSubject && (
							<div className="flex flex-row items-center space-x-12">
								<select
									value={selectedAssessment}
									onChange={(e) => {
										setSelectedAssessment(e.target.value);
									}}
									className="select-style"
								>
									<option value="" disabled>
										Select Assessment
									</option>
									{assessmentsPass.map((assessmentPass) => (
										<option
											key={assessmentPass.assessment_id}
											value={assessmentPass.assessment_id}
										>
											{assessmentPass.type}
										</option>
									))}
								</select>
							</div>
						)}
						{/* Input field for new grade and Save button */}
						{selectedAssessment && (
							<div>
							<div>
								<input
									type="number"
									value={newGrade}
									onChange={(e) => {
										const value = Math.min(100, Math.max(0, parseInt(e.target.value, 10)));
										if (!isNaN(value)) {
											setNewGrade(value.toString());
										}
									}}
									placeholder="Enter achieved grade"
									className="w-full p-4 text-xl font-medium text-white bg-transparent border-2 rounded-lg placeholder-purple-300 border-purple-500 focus:border-purple-700 focus:bg-dark-500 focus:outline-none transition duration-150 ease-in-out"
								/>
								<div className="h-14"></div>

								<button
									onClick={saveGrade}
									className="text-white bg-gradient-to-r from-buttonPurple to-buttonOrange hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
								>
									Save Grade
								</button>
							</div>
							<div className="h-14"></div>
					
							{/* <button
								onClick={saveGrade}
								className="text-white bg-gradient-to-r from-buttonPurple to-buttonOrange hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
							>
								Save Grade
							</button> */}
						</div>
						)}
					</div>

					{/* Form to add a new assessment */}
					{selectedSubject && (
						<>
							<div className="text-center justify-center items-center p-12 text-white text-2xl ">
								<h3>Add Assessment: </h3>
							</div>
							<form onSubmit={handleNewAssessmentSubmit} className="my-8">
								<div className="flex flex-col space-y-4">
									<input
										type="text"
										value={newAssessmentType}
										onChange={(e) => setNewAssessmentType(e.target.value)}
										placeholder="Assessment Type"
										className="w-full p-4 text-xl font-medium text-white bg-transparent border-2 rounded-lg placeholder-purple-300 border-purple-500 focus:border-purple-700 focus:bg-dark-500 focus:outline-none transition duration-150 ease-in-out"
									/>
									<input
										type="number"
										value={newMaxGrade}
										onChange={(e) => setNewMaxGrade(e.target.value)}
										placeholder="Max Grade"
										className="w-full p-4 text-xl font-medium text-white bg-transparent border-2 rounded-lg placeholder-purple-300 border-purple-500 focus:border-purple-700 focus:bg-dark-500 focus:outline-none transition duration-150 ease-in-out"
									/>
									<button
										type="submit"
										className="text-white bg-gradient-to-r from-buttonPurple to-buttonOrange hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
									>
										Add Assessment
									</button>
								</div>
							</form>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
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
						Always stay updated in your <b>STUDENT PORTAL</b>
					</p>
				</div>
				<h5 className="text-white/50 text-xl">{formatDate(today)}</h5>
			</div>
			<div>
				<img src="assets/laptopicon.svg" alt="" width={500} height={500} />
			</div>
		</div>
	);
}