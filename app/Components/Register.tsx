import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Axios from "axios";
import { jwtDecode } from "jwt-decode";


const RegisterComponent = () => {
    const [advisorId, setAdvisorId] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState(null); // null, "success", or "error"

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            setAdvisorId(decoded.advisor_id); // Assuming 'advisorId' is stored in the token
        }
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            sendToBackend(file);
        }
    };

    const sendToBackend = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("advisor_id", advisorId);

        try {
            const response = await Axios.post("http://127.0.0.1:5000/grademate/advisor/add_advisee/bulk", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Backend response:", response.data);
            setSubmissionStatus("success");
        } catch (error) {
            console.error("Error sending data to backend:", error);
            setSubmissionStatus("error");
        }
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h2 className="text-xl font-semibold text-white mb-4">
                Upload Advisee List (CSV)
            </h2>
            <div className="flex items-center justify-center mb-4">
                <label className="flex flex-col items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-700 hover:text-white">
                    <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M16.7,5.3L10.4,0.6c-0.3-0.2-0.7-0.2-1,0L3.3,5.3C3.1,5.5,3,5.7,3,6v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V6C17,5.7,16.9,5.5,16.7,5.3z M12,17H8v-2h4V17z M12,13H8v-2h4V13z M11,5L15,9h-3v2H8V9H5L9,5H11z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">Select a file</span>
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".csv"
                    />
                </label>
            </div>
            {submissionStatus === "success" && (
                <p className="mt-4 text-green-500">Advisees registered successfully!</p>
            )}
            {submissionStatus === "error" && (
                <p className="mt-4 text-red-500">Failed to register advisees. Please try again.</p>
            )}
        </div>
    );
};

export default RegisterComponent;