/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: "'Space Grotesk', sans-serif;",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      red: "hsl(0, 100%, 66%)",
      "light-grayish-violet": "hsl(270, 3%, 87%)",
      "dark-grayish-violet": "hsl(279, 6%, 55%)",
      "very-dark-violet": "hsl(278, 68%, 11%)",
    },
    extend: {},
  },
  plugins: [],
};
