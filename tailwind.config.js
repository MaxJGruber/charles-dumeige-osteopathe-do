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
        lightblue: "#3abfd6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
