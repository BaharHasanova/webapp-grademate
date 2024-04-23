"use client";

import React, { useState } from "react";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";

const advisorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/grademate/advisor/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      console.log("response");
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message); // Replace 'data.message' with your API's error message field
      }
      // Store the token somewhere (localStorage for example)
      localStorage.setItem("token", data.token);
      // Redirect the user to their dashboard or wherever needed
    } catch (error) {
      setError("Failed to login");
      // Handle error by setting state or however you prefer
    }
  };

  return (
    <>
      <div
        className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/assets/login-page.png')",
        }}
      >
        <Navbar
          isHomePage={false}
          isLoginPage={true}
          pageType={advisorLogin}
          userName={"advisor"}
        />
        <Form
          email={email}
          password={password}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleLogin}
        />
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default advisorLogin;
