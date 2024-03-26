import React from "react";
import Image from "next/image";

const Navbar = () => {
	return (
		<div>
			<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
				<nav
					className="mt-6 relative max-w-[85rem] w-full   mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto "
					aria-label="Global"
				>
					<div className="flex items-center justify-between">
						<a
							className="uppercase flex-none text-xl font-semibold text-white no-underline "
							href="my-app/app/Components/IntroSection.tsx"
							aria-label="Brand"
						>
							Grademate
						</a>
					</div>
					<div
						id="navbar-collapse-with-animation"
						className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
					>
						<div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
							<a
								className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600    md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
								href="#"
							>
								<img
									src="https://img.freepik.com/premium-photo/young-asian-indian-student-with-glasses-backpack-holds-book-shows-thumbs-up_928503-89.jpg"
									width={20}
									height={20}
									className="h-12 w-12 rounded-3xl border-4 border-purple-500"
									alt={""}
								/>
								<div>
									<h5 className="text-white">John doe</h5>
									<h4>3rd year</h4>
								</div>
							</a>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
