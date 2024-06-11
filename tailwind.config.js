/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0, 0%, 100%)",
      accent: "hsl(277, 64%, 61%)",
      clrMain: "hsl(233, 47%, 7%)",
      clrCard: "hsl(244, 38%, 16%)",
      statHeading: "hsla(0, 0%, 100%, 0.6)",
      mainParagraph: "hsla(0, 0%, 100%, 0.75)",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        lexend: ["Lexend Deca", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
