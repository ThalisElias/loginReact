/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          //SLATE-*
        },
        purple: {
          400: "#9F67FF",
          // 500: "#7C3AED" violet-600,
        },
        while: "#ffffff",
        red: "#ED3A5A",
      },
      fontFamily: {
        sans: ["Titillium Web", "sans-serif"],
      },
      backgroundImage: {
        "img-purple": "url('./src/assets/bg.svg')",
      },
    },
  },
  plugins: [],
};
