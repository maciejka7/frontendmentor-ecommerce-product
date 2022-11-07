const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#FF7D1B",
      gray: colors.gray,
    },
  },
  plugins: [],
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
};
