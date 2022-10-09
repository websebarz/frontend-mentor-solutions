/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      red: "hsl(0, 100%, 74%)",
      green: "hsl(154, 59%, 51%)",
      blue: "hsl(248, 32%, 49%)",
      "dark blue": "hsl(249, 10%, 26%)",
      "grayish blue": "hsl(246, 25%, 77%)",
    },
    fontFamily: {
      sans: "Poppins, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
