/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lexend: ["Lexend Deca", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0, 0%, 100%)",
      accent: "hsl(277, 64%, 61%)",
      clrMain: "hsl(233, 47%, 7%)",
      clrCard: "hsl(244, 38%, 16%)",
      statHeading: "hsla(0, 0%, 100%, 0.5)",
      mainParagraph: "hsla(0, 0%, 100%, 0.6)",
      tint: "hsla(277deg, 60%, 50%, 0.6)",
    },
    extend: {},
  },
  plugins: [],
};
