import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<h3 className="mt-16 max-w-[1000px] mx-auto text-white text-lg font-bold mb-2">
				FEATURED ON
			</h3>
			<div className="mt-4 footer-bg max-w-[1000px] mx-auto py-6 px-8 text-white rounded-xl">
				<div className="flex justify-between items-center">
					<div>
						{/* Using an image from the `public/assets` directory */}
						<Image
							src="/assets/uni-logo.png"
							alt="University Logo"
							width={90}
							height={90}
						/>
					</div>
					<div>
						<p>
							Contact Us <br /> +601111111111
						</p>
						<p>© 2023 UNITEN All Rights Reserved</p>
					</div>
					<div className="flex flex-col items-center">
						{" "}
						{/* Stack items vertically and center them */}
						<p className="mb-6">Follow Us on Social Media</p>
						<a
							href="https://www.instagram.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-[-15px]"
						>
							<FaInstagram size={30} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
