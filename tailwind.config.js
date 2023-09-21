/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				bodyFont: ["Poppins", "sans-serif"],
				titleFont: ["Montserrat", "sans-serif"],
			},
			screens: {
				xs: "320px",
				sm: "375px",
				sml: "500px",
				md: "667px",
				mdl: "768px",
				lg: "960px",
				lgl: "1024px",
				xl: "1280px",
			},
			colors: {
				bodyColor: "#ECF0F3",
				lightText: "#212428",
				boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
				designColor: "#f92807",
			},
			boxShadow: {
				shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
			},
		},
	},
	plugins: [],
};
