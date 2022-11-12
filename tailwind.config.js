const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: "class",
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				base: colors.zinc,
				tone: {
					50: "rgb(var(--color-tone)/ <alpha-value>)",
					100: "rgb(var(--color-tone)/ <alpha-value>)",
					200: "rgb(var(--color-tone)/ <alpha-value>)",
					300: "rgb(var(--color-tone)/ <alpha-value>)",
					400: "rgb(var(--color-tone)/ <alpha-value>)",
					500: "rgb(var(--color-tone)/ <alpha-value>)",
					600: "rgb(var(--color-tone)/ <alpha-value>)",
					700: "rgb(var(--color-tone)/ <alpha-value>)",
					800: "rgb(var(--color-tone)/ <alpha-value>)",
					900: "rgb(var(--color-tone)/ <alpha-value>)",
				},
			},
			borderRadius: {
				DEFAULT: "30px",
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
				DEFAULT: "200ms",
			},
			transitionTimingFunction: {
				DEFAULT: "cubic-bezier(0.1, 0.2, 0.5, 1)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
