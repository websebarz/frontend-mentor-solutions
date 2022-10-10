/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      blue: {
        dark: "#070724",
      },
    },
    fontFamily: {
      sans: ["Antonio", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
