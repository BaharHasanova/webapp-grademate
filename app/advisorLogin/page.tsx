import React from "react";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";

const advisorLogin = () => {
	return (
		<>
			<div
				className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed"
				style={{
					backgroundImage: "url('/assets/login-page.png')",
					// 'url("https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/6dc8b117-6b9f-4ab5-87b3-18ed1e8a15d0.jpg?alt=media")',
				}}
			>
				<Navbar
					isHomePage={false}
					isLoginPage={true}
					pageType={advisorLogin}
					userName={"advisor"}
				/>
				<Form></Form>
			</div>
		</>
	);
};

export default advisorLogin;
