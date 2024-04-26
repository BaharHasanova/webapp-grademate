"use client"; // This is a client component || to be able to use useState, useEffect, etc

import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../Components/Navbar";
import { jwtDecode } from "jwt-decode";
import GradesTable from "../Components/GradesTable";
import GradePercentage from "../Components/GradesPercentage";

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

  const gradePercentage = 33;

  const gradeData = [
    { assessment: "Quiz", grade: "10", achievedGrade: "10" },
    { assessment: "Quiz", grade: "10", achievedGrade: "10" },
    { assessment: "Quiz", grade: "10", achievedGrade: "10" },
    { assessment: "Quiz", grade: "10", achievedGrade: "10" },
    { assessment: "Quiz", grade: "10", achievedGrade: "10" },
    { assessment: "Quiz", grade: "10", achievedGrade: "10" },
    // ... more data
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setAdvisorId(decoded.advisor_id); // Assuming 'advisorId' is stored in the token
    }
  }, []);

  useEffect(() => {
    if (advisorId) {
      // Ensures we have the advisorId before making the call
      const fetchAdvisees = async () => {
        try {
          const response = await Axios.get(
            "http://127.0.0.1:5000/grademate/advisor/students",
            {
              params: { advisor_id: advisorId },
            }
          );
          console.log("Advisees data:", response.data); // Debugging line
          setAdvisees(response.data);
        } catch (error) {
          console.error("Failed to fetch advisees:", error);
        }
      };
      fetchAdvisees();
    }
  }, [advisorId]); // Rerun this effect when advisorId changes

  // Fetch semesters based on selected advisee
  useEffect(() => {
    if (selectedAdvisee) {
      const fetchSemesters = async () => {
        try {
          const response = await Axios.get(
            "http://127.0.0.1:5000/grademate/advisor/student/semesters",
            { params: { student_id: selectedAdvisee } }
          );
          setSemesters(response.data);
          setSemesterId(""); // Reset semester ID when a new advisee is selected
          setSubjects([]); // Clear subjects when a new advisee is selected
        } catch (error) {
          console.error("Failed to fetch semesters:", error);
          setSemesters([]); // Ensure semesters are cleared if fetch fails
          setSubjects([]); // Also clear subjects
        }
      };
      fetchSemesters();
    } else {
      setSemesters([]); // Clear semesters if no advisee is selected
      setSubjects([]); // Clear subjects as well
    }
  }, [selectedAdvisee]); // Dependency on selectedAdvisee

  // Select semester logic
  useEffect(() => {
    if (selectedSemester) {
      const fetchSubjects = async () => {
        setSubjects([]); // Clear previous subjects right before fetching new ones
        try {
          const response = await Axios.get(
            "http://127.0.0.1:5000/grademate/advisor/student/semester/classes",
            { params: { semester_id: selectedSemester } }
          );
          setSubjects(response.data);
        } catch (error) {
          console.error("Failed to fetch subjects:", error);
          setSubjects([]); // Ensure subjects are cleared if fetch fails
        }
      };
      fetchSubjects();
    } else {
      setSubjects([]); // Clear subjects if no semester is selected
    }
  }, [selectedSemester]); // Dependency on selectedSemester

  const fetchAssessments = async () => {
    if (selectedSubject) {
      setAssessments([]); // Clear previous assessments
      try {
        const response = await Axios.get(
          "http://127.0.0.1:5000/grademate/subject/assessments",
          { params: { subject_id: selectedSubject } }
        );
        setAssessments(
          response.data.map((a) => ({
            type: a.type,
            max_grade: a.max_grade,
            achievedGrade: "", // Placeholder for now
          }))
        );
      } catch (error) {
        console.error("Failed to fetch assessments:", error);
      }
    }
  };

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
        pageType="AdvisorPage"
        userName="Advisor"
      />

      {/* Welcome Header */}
      <div className="w-full text-center py-4">
        <h1 className="text-4xl text-white font-semibold">
          Welcome To Your Dashboard
        </h1>
      </div>

      {/* Banner */}
      <div className="mx-24">
        <div className="h-12"></div>
        <div className="bg-bannerColor h-64 rounded-3xl p-12 flex flex-row items-center justify-between">
          <div className="h-full flex flex-col space-y-12 mr-8 pl-8">
            <div className="space-y-3">
              <h2 className="text-white font-bold text-5xl">
                Welcome back, Advisor!
              </h2>
              <p className="text-white/50 text-2xl">
                Always stay updated in your <b>ADVISOR PORTAL</b>
              </p>
            </div>
            <h5 className="text-white/50 text-xl">December 7, 2023</h5>
          </div>
          <div>
            <img
              src="assets/advisor-elements.svg"
              alt=""
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>

      {/*Selection Menu - Advisee */}
      <div className="mx-24 mt-8 flex justify-between">
        <div className="flex flex-col items-start mb-6 w-full">
          <h2 className="text-white mb-6 text-2xl">Student Name: </h2>
          <div className="relative inline-flex">
            <select
              id="advisee-select"
              onChange={(e) => setSelectedAdvisee(e.target.value)}
              defaultValue={""}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-2xl font-medium rounded-lg border border-bannerColor bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
        </div>

        {/* Render the semester dropdown only if an advisee has been selected */}
        <div className="flex flex-col items-start mb-6 w-full">
          <h2 className="text-white mb-6 text-2xl">Semester: </h2>
          <div className="relative inline-flex">
            <select
              id="semester-select"
              onChange={(e) => setSemesterId(e.target.value)}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-2xl font-medium rounded-lg border border-bannerColor bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              disabled={!selectedAdvisee} // Disable if no advisee is selected
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
        </div>

        {/*Selection Menu - Subject Name */}
        <div className="flex flex-col items-start mb-6 w-full">
          <h2 className="text-white mb-6 text-2xl">Subject Name: </h2>
          <div className="relative inline-flex">
            <select
              id="subject-select"
              onChange={(e) => setSelectedSubject(e.target.value)}
              defaultValue={""}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-2xl font-medium rounded-lg border border-bannerColor bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              disabled={!selectedSemester} // Disable if no semester is selected
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
        </div>
        {/* View Grades Button */}
        {selectedSubject && (
          <div className="text-center mt-6 mb-6">
            <button
              onClick={() => {
                fetchAssessments();
                setShowGrades(true); // This will trigger the table and percentage to display after fetching
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-300"
              disabled={!selectedSubject}
            >
              View Grades
            </button>
          </div>
        )}
      </div>

      {/* Text According to the selection */}
      <div className="w-full text-center py-8">
        <h1 className="text-2xl text-white font-semibold">
          view grades of <u>Emily Johnson</u> - Semester 1 (2021 - 2022) - Data
          Visualization Programming :
        </h1>
      </div>

      {/* Table and circle percentage */}
      {showGrades && (
        <div className="flex flex-wrap justify-around items-center">
          <div className="w-full md:w-[40%]">
            <GradesTable
              grades={assessments.map((a) => ({
                assessment: a.type,
                max_grade: a.max_grade,
                achievedGrade: "", // Placeholder for now
              }))}
            />
          </div>

          <div style={{ width: "330px", height: "330px" }}>
            <GradePercentage percentage={gradePercentage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvisorPage;
