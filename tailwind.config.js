/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: {
					1: "#DBD8E3",
					2: "#5C5470",
					3: "#352F44",
					4: "#2A2438",
				},
			},
		},
	},
	plugins: [],
};
