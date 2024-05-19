"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { jwtDecode } from "jwt-decode";
import Axios from "axios";
import GradesTable from "../Components/GradesTable";
import GradePercentage from "../Components/GradesPercentage";

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
						"http://127.0.0.1:5000/grademate/advisor/students",
						{
							params: { advisor_id: advisorId },
						}
					);
					console.log("Advisees data:", response.data);
					setAdvisees(response.data);
				} catch (error) {
					console.error("Failed to fetch advisees:", error);
				}
			};
			fetchAdvisees();
		}
	}, [advisorId]);

	useEffect(() => {
		if (selectedAdvisee) {
			const fetchSemesters = async () => {
				try {
					const response = await Axios.get(
						"http://127.0.0.1:5000/grademate/advisor/student/semesters",
						{ params: { student_id: selectedAdvisee } }
					);
					setSemesters(response.data);
					setSemesterId("");
					setSubjects([]);
				} catch (error) {
					console.error("Failed to fetch semesters:", error);
					setSemesters([]);
					setSubjects([]);
				}
			};
			fetchSemesters();
		} else {
			setSemesters([]);
			setSubjects([]);
		}
	}, [selectedAdvisee]);

	useEffect(() => {
		if (selectedSemester) {
			const fetchSubjects = async () => {
				setSubjects([]);
				try {
					const response = await Axios.get(
						"http://127.0.0.1:5000/grademate/advisor/student/semester/classes",
						{ params: { semester_id: selectedSemester } }
					);
					setSubjects(response.data);
				} catch (error) {
					console.error("Failed to fetch subjects:", error);
					setSubjects([]);
				}
			};
			fetchSubjects();
		} else {
			setSubjects([]);
		}
	}, [selectedSemester]);

	const fetchAssessments = async () => {
		if (selectedSubject && selectedAdvisee) {
			setAssessments([]);
			setIsLoading(true);
			setError("");

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
							student_id: selectedAdvisee,
						},
					}
				);

				const combinedAssessments = assessmentsResponse.data.map(
					(assessment) => {
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
					}
				);

				setAssessments(combinedAssessments);
				setGradePercentage(gradesResponse.data[0].grade_percentage);
				setShowGrades(true);
			} catch (error) {
				console.error("Failed to fetch assessments:", error);
				setError("Failed to load data.");
			}
			setIsLoading(false);
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

			<div className="mx-24">
				<div className="h-12"></div>
				<Banner userName="Advisor" />

				<div className="mx-24 mt-8 flex justify-between items-end">
					<div className="select-container">
						<h2 className="text-white mb-6 text-2xl">Student Name: </h2>
						<select
							id="advisee-select"
							onChange={(e) => setSelectedAdvisee(e.target.value)}
							defaultValue={""}
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
							onChange={(e) => setSemesterId(e.target.value)}
							className="select-style"
							disabled={!selectedAdvisee}
						>
							<option value="" disabled selected>
								Select Semester
							</option>
							{semesters.map((semester) => (
								<option key={semester.semester_id} value={semester.semester_id}>
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
						<div
							className="w-full md:w-[60%] mt-20"
							style={{ minHeight: "500px" }}
						>
							<GradesTable grades={assessments} />
						</div>
						<div style={{ width: "330px", height: "330px", marginTop: "0px" }}>
							<GradePercentage percentage={gradePercentage} />
						</div>
					</div>
				)}
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
