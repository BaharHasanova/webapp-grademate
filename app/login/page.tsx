"use client";

import React, { useState } from "react";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const adminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/grademate/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // const errorData = await response.json();
        throw new Error(data.message);
      }

      //   if (data.error) {
      //     throw new Error(data.message);
      //   }

      if (data.token) {
        localStorage.setItem("token", data.token);
        router.push("/adminPage");
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
          pageType={adminLogin}
          userName={"admin"}
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

export default adminLogin;
