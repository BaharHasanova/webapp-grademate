"use client";

import React, { useState } from "react";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://f9wurdvze8.execute-api.ap-southeast-1.amazonaws.com/production/grademate/student/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
        router.push("/studentPage");
      } else {
        throw new Error("Token not provided");
      }
    } catch (error) {
      toast.error(
        (error as { message: string }).message ||
          "An error occurred during login."
      );
      console.error("Login failed:", error);
      setError("Failed to login");
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
          pageType={StudentLogin}
          userName={"student"}
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

export default StudentLogin;
