/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191E29",
        secondary: "#132046",
        tertiary: "#01C38D",
        neutral: {
          white: "#FFFFFF",
          grey: "#696E79",
          light: "#F8F6F7",
        },
      },
      fontFamily: {
        body: ["Inter"],
      },
    },
  },
  variants: {},
  plugins: [],
};
