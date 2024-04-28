"use client"; // This line is correct if you're intentionally using React Server Components and client components.
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { jwtDecode } from "jwt-decode";
import Axios from "axios";
import GradesTable from "../Components/GradesTable";
import GradePercentage from "../Components/GradesPercentage";

interface Assessment {
  assessment_id: number;
  type: string;
  max_grade: number;
}

interface ClassCode {
  subject_id: number;
  name: string;
}

export default function StudentPage() {
  // Renamed to reflect the content
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
    // Assuming the student ID can be retrieved from the decoded token

    const fetchClassCodes = async () => {
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
  }, [studentId]); // Empty dependency array ensures this runs once on component mount

  const fetchAssessmentsTable = async () => {
    if (selectedSubject && studentId) {
      setAssessments([]);
      setIsLoading(true); // Start loading
      setError(""); // Clear previous errors

      try {
        // Fetch the assessment structure
        const assessmentsResponse = await Axios.get(
          "http://127.0.0.1:5000/grademate/subject/assessments",
          { params: { subject_id: selectedSubject } }
        );

        // Fetch the achieved grades
        const gradesResponse = await Axios.get(
          "http://127.0.0.1:5000/grademate/student/assessment_grades",
          {
            params: {
              subject_id: selectedSubject,
              student_id: studentId,
            },
          }
        );

        // Combine both results
        const combinedAssessments = assessmentsResponse.data.map(
          (assessment) => {
            const achievedGradeData = gradesResponse.data[1].find(
              (grade) => grade.assessment_id === assessment.assessment_id
            );
            return {
              assessment_id: assessment.assesment_id,
              type: assessment.type,
              max_grade: `${assessment.max_grade}`,
              achievedGrade: achievedGradeData
                ? achievedGradeData.achieved_grade
                : "-", // Show "N/A" if no grade is found
            };
          }
        );

        setAssessments(combinedAssessments);

        // Update the grade percentage if present
        setGradePercentage(gradesResponse.data[0].grade_percentage);

        setShowGrades(true); // Show grades table and percentage
      } catch (error) {
        console.error("Failed to fetch assessments:", error);
        setError("Failed to load data."); // Set an error message
      }
      setIsLoading(false); // End loading
    }
  };

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

  const saveGrade = async () => {
    // Ensure that both the assessment and the new grade are selected
    if (!selectedAssessment || !newGrade) {
      alert("Please select an assessment and enter a grade.");
      return;
    }

    setIsLoading(true); // Start loading
    setError(""); // Clear previous errors

    // SAVE THE GRADES
    try {
      console.log("BELOW ARE VARIABLES");
      console.log(studentId);
      console.log(selectedAssessment);
      console.log(newGrade);
      const response = await fetch(
        "http://127.0.0.1:5000/grademate/grade/save_grade",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ studentId, selectedAssessment, newGrade }),
          // student_id: studentId,
          // assessment_id: selectedAssessment,
          // achieved_grade: newGrade,
        }
      );

      if (response.status === 200) {
        console.log("Grade saved successfully");
        fetchAssessmentsTable(); // Fetch the updated table data
        setNewGrade(""); // Reset the new grade input
        setSelectedAssessment(""); // Reset the selected assessment
      } else {
        console.error("Failed to save grade: ", response.status);
        setError("Failed to save grade."); // Set an error message
      }
    } catch (error) {
      console.error("Error saving grade:", error);
      setError("Error saving grade."); // Set an error message
    }

    setIsLoading(false); // End loading
  };

  // Toggle dropdown function
  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const handleFileChange = (event: any) => {
  //   const selectedFile = event.target.files[0];
  //   setFile(selectedFile);
  //   handleSubmit(event);
  // };

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();

  //   if (!file) {
  //     console.log("No file selected");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("file", file);

  //   try {
  //     const response = await fetch("http://127.0.0.1:5000/grademate/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log(responseData);
  //       setColumns(responseData.columns);
  //       setData(responseData.data);

  //       setResponseMessage(responseData);
  //       console.log("File uploaded successfully");
  //     } else {
  //       console.error("Failed to upload file");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };

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

        <div className="w-8/12">
          <div className="flex flex-row items-center space-x-12">
            <h2 className="text-white text-2xl">Subject: </h2>
            <div className="relative inline-flex">
              <select
                id="subject-select"
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  // Reset assessments when a new subject is selected
                  setSelectedAssessment("");
                  setGrades([]);
                }}
                className="py-3 px-4 inline-flex items-center gap-x-2 text-2xl font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <option value="" disabled selected hidden>
                  Select Your Subject
                </option>
                {classCodes.map((classCode) => (
                  <option
                    key={classCode.subject_id}
                    value={classCode.subject_id}
                  >
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
                  className="mb-4 p-2"
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
                <input
                  type="number"
                  value={newGrade}
                  onChange={(e) => setNewGrade(e.target.value)}
                  placeholder="Enter achieved grade"
                  className="..."
                />
                <div className="h-14"></div>

                <button
                  onClick={saveGrade}
                  className="text-white bg-gradient-to-r from-buttonPurple to-buttonOrange hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
                >
                  Save Grade
                </button>
              </div>
            )}
          </div>

          {/* <div className="h-14"></div>
          <label
            htmlFor="fileInput"
            className="w-full text-white bg-gradient-to-r from-buttonPurple to-buttonOrange hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
          >
            Upload
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            style={{ display: "none" }} // Keeps the input hidden
          />
          <>{data && columns && <Table data={data} columns={columns} />}</> */}
        </div>
      </div>
    </div>
  );
}
function Banner({ userName }) {
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
        <h5 className="text-white/50 text-xl">December 7, 2023</h5>
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
