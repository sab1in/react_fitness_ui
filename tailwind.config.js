

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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
