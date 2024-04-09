import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="mt-16 px-8 lg:px-36">
			<h3 className="text-white text-3xl font-bold mb-4">FEATURED ON</h3>{" "}
			{/* Increased font size */}
			<div className="footer-bg py-12 text-white rounded-xl glassmorphism">
				{" "}
				{/* Increased vertical padding */}
				<div className="flex flex-col md:flex-row px-12 justify-between items-center">
					<div>
						<Image
							src="/assets/uni-logo.png"
							alt="University Logo"
							width={120}
							height={120}
							layout="fixed"
						/>
					</div>
					<div className="text-center mt-8 md:mt-0">
						<p className="text-lg">
							{" "}
							{/* Increased font size */}
							Contact Us <br /> +601111111111
						</p>
						<p className="text-lg">
							{" "}
							{/* Increased font size */}© 2023 UNITEN All Rights Reserved
						</p>
					</div>
					<div className="flex flex-col items-center mt-8 md:mt-0">
						<p className="text-lg mb-2">
							{" "}
							{/* Increased font size and adjusted margin */}
							Follow Us on Social Media
						</p>
						<a
							href="https://www.instagram.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-4"
						>
							<FaInstagram size={40} /> {/* Increased icon size */}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
