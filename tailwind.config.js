/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        black: '#222831',
        gray: '#3F3E3F',
        white: '#A0A1A1',
        orange: '#F05454',
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      backgroundImage: {
        laptop: 'url("../public/assets/laptop-vector-png.png")',
      },
      backgroundSize: {
        hover: '2px',
      },
    },
  },
  plugins: [],
};
