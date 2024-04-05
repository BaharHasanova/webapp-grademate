import React from "react";
import Navbar from "./Components/Navbar";
import IntroSection from "./Components/IntroSection";

const Home = () => {
	return (
		<div
			className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed"
			style={{
				backgroundImage: "url('/assets/login-page.png')",
			}}
		>
			<Navbar isHomePage={true} isLoginPage={false} />

			<IntroSection />
		</div>
	);
};

export default Home;
