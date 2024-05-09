/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["halloween"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        "calcagebra-light": "#976DD7",
      },
    },
  },
};
