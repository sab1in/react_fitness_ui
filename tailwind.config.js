

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red1:"#f00",
        black1 : "#000",
        lightWhite: "#aaa",
        lightBg:  "#111",
      },
      fontFamily: {
        Nunito: ["Nunito"],
      },
      height:{
        600: '600px',
        300: '300px',
        400: '400px'
      },
      lineHeight:{
        12: '2.75rem',
        14: '3rem',
        16: '3.5rem',
        18: '4rem',
        20: '5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
