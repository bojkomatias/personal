const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: "class",
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./primitives/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				base: colors.zinc,
				tone: {
					500: "rgb(var(--color-tone)/ <alpha-value>)",
					600: "rgb(var(--color-tone)/ <alpha-value>)",
					700: "rgb(var(--color-tone)/ <alpha-value>)",
				},
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
			keyframes: {
				'spin-bw': {
					'100%': { transform: 'rotate(-360deg)' },
				}
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms")({
			strategy: "base", // only generate classes
		}),
	],
};
