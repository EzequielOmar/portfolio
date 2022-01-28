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
      darker: "#283044",
      dark: "#78A1BB",
      contrast: "#bfa89e",
      contrast_dark: "#8b786d",
      light: "#ebf5ee",
    },
  },
};
