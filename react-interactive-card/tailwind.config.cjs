/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: "'Space Grotesk', sans-serif;",
    },
    colors: {
      red: "hsl(0, 100%, 66%)",
      "light-grayish-violet": "hsl(270, 3%, 87%)",
      "dark-grayish-violet": "hsl(279, 6%, 55%)",
      "dark-violet": "hsl(278, 68%, 11%)",
    },
    extend: {},
  },
  plugins: [],
};
