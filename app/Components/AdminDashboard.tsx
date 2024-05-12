"use client";

import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  const [viewType, setViewType] = useState("students");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          viewType === "students"
            ? "http://127.0.0.1:5000/grademate/student"
            : "http://127.0.0.1:5000/grademate/advisors";
        const response = await Axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [viewType]);

  return (
    <div
      className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed flex flex-col"
      style={{
        backgroundImage: "url('/assets/login-page.png')",
      }}
    >
      <div className="flex flex-grow min-h-screen">
        <div className="flex-grow pl-18 pr-16">
          <div className="bg-bannerColor rounded-3xl m-8 p-12 flex justify-between items-center">
            <div className="space-y-3">
              <h2 className="text-white font-bold text-5xl">Dashboard</h2>
              <p className="text-white/50 text-2xl">
                View {viewType === "students" ? "Students" : "Advisors"}
              </p>
              <h5 className="text-white/50 text-xl">December 7, 2023</h5>
            </div>
            <div>
              <img
                src="assets/admin-elements.svg"
                alt=""
                width={350}
                height={350}
              />
            </div>
          </div>

          {/* Buttons for selecting view type */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setViewType("students")}
              className={`sidebar-link text-2xl flex items-center justify-center text-white py-4 px-8 rounded hover:bg-lightPurple ${
                viewType === "students" ? "bg-lightPurple" : ""
              }`}
            >
              View Students
            </button>
            <button
              onClick={() => setViewType("advisors")}
              className={`sidebar-link text-2xl flex items-center justify-center text-white py-4 px-8 rounded hover:bg-lightPurple ${
                viewType === "advisors" ? "bg-lightPurple" : ""
              }`}
            >
              View Advisors
            </button>
          </div>

          <div className="bg-lightPurple rounded-lg p-6">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr>
                  {viewType === "students" ? (
                    <>
                      <th className="py-2 px-4 border-b">Student ID</th>
                      <th className="py-2 px-4 border-b">Full Name</th>
                      <th className="py-2 px-4 border-b">Email</th>
                      <th className="py-2 px-4 border-b">Status</th>
                      <th className="py-2 px-4 border-b">CGPA</th>
                      <th className="py-2 px-4 border-b">GPA</th>
                      <th className="py-2 px-4 border-b">Advisor</th>
                      <th className="py-2 px-4 border-b">Program</th>
                    </>
                  ) : (
                    <>
                      <th className="py-2 px-4 border-b">Advisor ID</th>
                      <th className="py-2 px-4 border-b">Full Name</th>
                      <th className="py-2 px-4 border-b">Email</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b">
                    {viewType === "students" ? (
                      <>
                        <td className="py-2 px-4">{item.student_id}</td>
                        <td className="py-2 px-4">{item.full_name}</td>
                        <td className="py-2 px-4">{item.email}</td>
                        <td className="py-2 px-4">
                          {item.status ? "Active" : "Deactivated"}
                        </td>
                        <td className="py-2 px-4">{item.cgpa}</td>
                        <td className="py-2 px-4">{item.gpa}</td>
                        <td className="py-2 px-4">{item.advisor_id}</td>
                        <td className="py-2 px-4">{item.program_id}</td>
                      </>
                    ) : (
                      <>
                        <td className="py-2 px-4">{item.advisor_id}</td>
                        <td className="py-2 px-4">{item.full_name}</td>
                        <td className="py-2 px-4">{item.email}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
