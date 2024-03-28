import React from "react";
// import Navbar from "app/Components/Navbar.tsx";
// import Form from "../../Components/Form";
// import Navbar from "app/Components/Navbar.tsx";
// import Form from "app/Components/Form";
// import Form from "../../Components/Form";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";

const loginPage = () => {
	return (
		<>
			<div
				className="min-h-screen w-full bg-no-repeat bg-cover bg-fixed"
				style={{
					backgroundImage: "url('/assets/login-page.png')",
					// 'url("https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/6dc8b117-6b9f-4ab5-87b3-18ed1e8a15d0.jpg?alt=media")',
				}}
			>
				<Navbar isHomePage={false} />

				<Form></Form>
			</div>
		</>
	);
};

export default loginPage;
