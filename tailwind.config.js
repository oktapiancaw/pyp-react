/* eslint-disable no-undef */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      DEFAULT: "0 0 5px rgb(0 0 0 / 15%)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
