"use client"; // This line is correct if you're intentionally using React Server Components and client components.
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import Table from "./Table";
// import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";

export default function StudentPage() {
  // Renamed to reflect the content
  const [file, setFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setStudentName(decoded.name); // adjust depending on how the claim is named
    }
  }, []); // The empty array ensures this effect runs once on mount

  // Toggle dropdown function
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    handleSubmit(event);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/grademate/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setColumns(responseData.columns);
        setData(responseData.data);

        setResponseMessage(responseData);
        console.log("File uploaded successfully");
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
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

        <div className="w-8/12">
          <div className="flex flex-row items-center space-x-12">
            <h2 className="text-white text-2xl">Subject: </h2>
            <div className="relative inline-flex">
              <select
                id="subject-select"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-2xl font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <option value="" disabled selected hidden>
                  Select Your Subject
                </option>
                <option value="Data Visualization Programming">
                  Data Visualization Programming
                </option>
                <option value="Software Testing">Software Testing</option>
                <option value="Technology Entrepreneurship">
                  Technology Entrepreneurship
                </option>
                <option value="Software Security">Software Security</option>
              </select>
            </div>
          </div>

          <div className="h-14"></div>
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
          <>{data && columns && <Table data={data} columns={columns} />}</>
        </div>
      </div>

      {/* Circular Progress with Percentage Text */}
      <div className="flex justify-end mt-4 mr-32">
        <div className="relative w-64 h-64">
          <svg
            className="w-full h-full"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-gray-200 dark:text-gray-700"
              strokeWidth="4"
            ></circle>
            <g className="origin-center -rotate-90 transform">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current dark:text-customTurquoise"
                strokeWidth="4"
                strokeDasharray="100"
                strokeDashoffset="25"
              ></circle>
            </g>
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <span className="text-center text-4xl font-bold text-buttonPurple">
              72%
            </span>
          </div>
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
