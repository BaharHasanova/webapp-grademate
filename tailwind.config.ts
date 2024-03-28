/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/preline/preline.js",
	],
	theme: {
		extend: {
			colors: {
				customPurple: "#8D8CDA",
				customTurquoise: "#88D0D1",
				customGray: "#A4A4A4",
			},
		},
	},
	plugins: [require("preline/plugin")],
};
