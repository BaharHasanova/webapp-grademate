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
				midnightblue: {
					"100": "#02053a",
					"200": "#01043a",
				},
				white: "#fff",
				gainsboro: {
					"100": "#e6e6e6",
					"200": "rgba(230, 230, 230, 0.09)",
				},
				darkslategray: "#363636",
				dimgray: "#5b5b5b",
				gray: {
					"100": "rgba(255, 255, 255, 0.5)",
					"200": "rgba(255, 255, 255, 0.75)",
					"300": "rgba(255, 255, 255, 0.05)",
					"400": "rgba(255, 255, 255, 0)",
				},
				forestgreen: "#4caf50",
				red: "rgba(255, 29, 29, 0)",
				black: "#000",
				chocolate: {
					"100": "#e7803e",
					"200": "#e78139",
				},
				coral: "#e77f44",
				orchid: "#e96bc5",
				darkgray: "#a4a4a4",
				customPurple: "#8D8CDA",
				customTurquoise: "#88D0D1",
				customGray: "#A4A4A4",
				customPink: "#9C3FE4",
				customOrange: "#C65647",
			},
			spacing: {},
			fontFamily: {
				poppins: "Poppins",
				"other-18-20-r": "'DM Sans'",
				inter: "Inter",
				outfit: "Outfit",
			},
			borderRadius: {
				"40xl": "59px",
				mini: "15px",
				"16xl": "35px",
				"13xl": "32px",
			},
		},
		fontSize: {
			"mid-9": "17.9px",
			lg: "18px",
			xs: "12px",
			mini: "15px",
			"mini-3": "14.3px",
			base: "16px",
			inherit: "inherit",
		},
		screens: {
			lg: {
				max: "1200px",
			},
			mq1050: {
				raw: "screen and (max-width: 1050px)",
			},
			mq750: {
				raw: "screen and (max-width: 750px)",
			},
			mq450: {
				raw: "screen and (max-width: 450px)",
			},
		},
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [require("preline/plugin")],
};
