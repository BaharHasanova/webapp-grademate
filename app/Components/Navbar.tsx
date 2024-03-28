import React from "react";

const Navbar = ({ isHomePage }) => {
	return (
		<div>
			<header className="flex flex-wrap py-10 px-20 md:justify-start md:flex-nowrap z-50 w-full text-sm">
				<nav
					className="mt-6 relative w-full mx-auto py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8"
					aria-label="Global"
				>
					<div className="flex items-center justify-between w-full">
						<a
							className="uppercase text-2xl font-semibold text-white no-underline"
							href="/"
							aria-label="Brand"
						>
							Grademate
						</a>
						<div className="flex items-center">
							{isHomePage ? (
								<a
									className="text-white text-2xl font-medium hover:text-customTurquoise cursor-pointer"
									href="/login"
								>
									{" "}
									Login
								</a>
							) : (
								<a
									className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
									href="#"
								>
									<img
										src="https://img.freepik.com/premium-photo/young-asian-indian-student-with-glasses-backpack-holds-book-shows-thumbs-up_928503-89.jpg"
										width={48}
										height={48}
										className="h-12 w-12 rounded-3xl border-4 border-purple-500"
										alt="User"
									/>
									<div>
										<h5 className="text-white">John doe</h5>
										<h4 className="text-sm">3rd year</h4>
									</div>
								</a>
							)}
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
