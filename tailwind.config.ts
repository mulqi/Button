import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./node_modules/flowbite-react/lib/**/*.js",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./public/**/*.html",
	],
	theme: {
		extend: {
			dropShadow: {
				"3xl": "0 10px 10px #00ADB5",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("daisyui")],
};
export default config;
