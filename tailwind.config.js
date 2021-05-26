module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1300px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
    fontFamily: {},
    height: {
      "5vh": "5vh",
      "10vh": "10vh",
      "15vh": "15vh",
      "20vh": "20vh",
      "30vh": "30vh",
      "25vh": "25vh",
      "40vh": "40vh",
      "50vh": "50vh",
      "60vh": "60vh",
      "70vh": "70vh",
      "80vh": "80vh",
      "85vh": "85vh",
      "90vh": "90vh",
      "95vh": "95vh",
      "100vh": "100vh",
    },
    weight: {
      "10vw": "10vw",
      "20vw": "20vw",
      "30vw": "30vw",
      "40vw": "40vw",
      "50vw": "50vw",
      "60vw": "60vw",
      "70vw": "70vw",
      "80vw": "80vw",
      "90vw": "90vw",
      "100vw": "100vw",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
