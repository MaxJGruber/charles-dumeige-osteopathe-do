module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   display: ["Oswald"],
    //   body: ["Avenir"],
    // },
    extend: {
      colors: {
        darkblue: "#21556d",
        darkblueHover: "#91bdd1",
        lightblue: "#3abfd6",
        lightblueHover: "#c3f3fc",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
