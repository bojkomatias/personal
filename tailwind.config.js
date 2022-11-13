const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: "class",
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				base: colors.zinc,
				tone: "rgb(var(--color-tone)/ <alpha-value>)",
			},
			borderRadius: {
				DEFAULT: "15px",
			},
			borderColor: ({ theme }) => ({
				DEFAULT: theme("colors.zinc.400"),
				...theme("colors"),
			}),
			borderOpacity: ({ theme }) => ({
				DEFAULT: theme("0.2"),
				...theme("opacity"),
			}),
			ringWidth: { DEFAULT: "1.1px" },
			ringColor: ({ theme }) => ({
				DEFAULT: theme("colors.base.400"),
				...theme("colors"),
			}),
			ringOpacity: ({ theme }) => ({
				DEFAULT: "0.2",
				...theme("opacity"),
			}),
			transitionDuration: {
				DEFAULT: "250ms",
			},
			transitionTimingFunction: {
				DEFAULT: "cubic-bezier(0, 0, 0, 1)",
				spring: "cubic-bezier(0, 0, 0, 2)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
