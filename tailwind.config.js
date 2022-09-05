/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        black: "#222831",
        gray: "#393E46",
        white: "#EEEEEE",
        orange: "#F05454",
      },
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      backgroundImage: {
        "laptop": "url('../public/assets/laptop-vector-png.png')"
      }
    },
  },
  plugins: [],
};
