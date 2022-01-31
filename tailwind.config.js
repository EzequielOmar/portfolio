module.exports = {
  mode: process.env.TAILWIND_MODE ? "jit" : "",
  purge: ["./src/**/**/*.{html,ts}", "./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      black: "#000000",
      dark: "#283044",
      grey: "#D6D6D6",
      contrast_dark: "#8b786d",
      contrast: "#bfa89e",
      light: "#ebf5ee",
    },
  },
};
