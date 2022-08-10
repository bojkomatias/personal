const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        pic: "url('/pic.webp')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: ' translateY(2px) translateX(-2px) rotate(2.5deg)',
            filter: 'saturate(0)',
          },
          '40%, 60%': {
            transform: 'translateY(-2px) translateX(2px) rotate(3.5deg)',
            filter: 'saturate(2)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
      },
    },
  },
}
