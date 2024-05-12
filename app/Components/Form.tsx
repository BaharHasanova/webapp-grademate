import React, { useState } from "react";

interface FormProps {
	email: string;
	password: string;
	onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({
	email,
	password,
	onEmailChange,
	onPasswordChange,
	onSubmit,
}) => {
	const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
	const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

	const handleForgotPasswordClick = (
		e: React.MouseEvent<HTMLAnchorElement>
	) => {
		e.preventDefault();
		setShowForgotPasswordModal(true);
	};

	const handleForgotPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Implement password recovery logic here
		alert(`Password recovery link sent to ${forgotPasswordEmail}`);
		setShowForgotPasswordModal(false);
	};

	return (
		<section className="max-w-[145rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 my-auto mx-auto">
			<div className="h-full flex items-center justify-center lg:justify-between">
				<div className="mb-6 lg:mb-0 lg:w-1/2">
					<img
						src="assets/Group 37326.svg"
						className="w-full"
						alt="Student w/ Phone"
					/>
				</div>

				<div className="lg:w-1/2 w-full px-6">
					<div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg">
						{/* Form Heading */}
						<h1 className="text-center text-4xl font-bold text-white mb-4">
							Welcome to <br /> Advisor Dashboard!
						</h1>
						<p className="text-center text-lg text-gray-300 mb-6">
							login to access your account
						</p>

						<form className="space-y-6" onSubmit={onSubmit}>
							<div>
								<label
									htmlFor="email"
									className="text-2xl font-medium text-gray-300 block mb-2"
								>
									Email Address
								</label>
								<input
									type="email"
									id="email"
									className="w-full p-4 text-2xl text-gray-900 bg-gray-800/50 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Email Address"
									value={email}
									onChange={onEmailChange}
									required
								/>
							</div>

							<div>
								<label
									htmlFor="password"
									className="text-2xl font-medium text-gray-300 block mb-2"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									className="w-full p-4 text-2xl text-gray-900 bg-gray-800/50 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Password"
									value={password}
									onChange={onPasswordChange}
									required
								/>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-xl text-gray-300"
									>
										Remember me
									</label>
								</div>
								<div className="text-xl">
									<a
										href="#"
										className="text-blue-400 hover:underline"
										onClick={handleForgotPasswordClick}
									>
										Forgot your password?
									</a>
								</div>
							</div>
							<button
								type="submit"
								className="text-2xl w-full text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-4 text-center"
							>
								Sign in
							</button>
						</form>
					</div>
				</div>
			</div>
			{/* Forgot Password Modal */}
			{showForgotPasswordModal && (
				<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
					<div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full">
						<h2 className="text-2xl font-bold mb-4 text-center">
							Forgot Password
						</h2>
						<form onSubmit={handleForgotPasswordSubmit}>
							<div className="mb-4">
								<label
									htmlFor="forgot-password-email"
									className="block text-gray-700 text-sm font-bold mb-2"
								>
									Enter your email address
								</label>
								<input
									type="email"
									id="forgot-password-email"
									className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="Email Address"
									value={forgotPasswordEmail}
									onChange={(e) => setForgotPasswordEmail(e.target.value)}
									required
								/>
							</div>
							<div className="flex justify-between">
								<button
									type="button"
									className="text-sm text-gray-500 hover:underline"
									onClick={() => setShowForgotPasswordModal(false)}
								>
									Cancel
								</button>
								<button
									type="submit"
									className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</section>
	);
};

export default Form;
