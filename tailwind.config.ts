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
				buttonPurple: "#9C3FE4",
				buttonOrange: "#C65647",
				bannerColor: "#593598",
				squareGradientLight: "#925FE2",
				squareGradientDark: "#7042C0", //
			},
		},
	},
	plugins: [require("preline/plugin")],
};
