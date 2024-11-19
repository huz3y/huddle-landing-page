/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Open Sans, sans-serif",
      poppins: "Poppins, sans-serif",
    },
    screens: {
      sm: "425px",
      // => @media (min-width: 425px) { ... }

      md: "675px",
      // => @media (min-width: 675px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        magenta: "hsl(300, 69%, 71%)",
      },
      height: {
        screen: "100dvh",
      },
      backgroundImage: {
        "desktop-bg": "url('bg-desktop.svg')",
        "mobile-bg": "url('bg-mobile.svg')",
      },
      boxShadow: {
        button: "0 5px 8px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
