/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Open Sans, sans-serif",
      poppins: "Poppins, sans-serif",
    },
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        magenta: "hsl(300, 69%, 71%)",
      },
    },
  },
  plugins: [],
};
