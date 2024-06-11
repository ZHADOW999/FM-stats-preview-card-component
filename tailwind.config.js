/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        lexend: ["Lexend Deca", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
