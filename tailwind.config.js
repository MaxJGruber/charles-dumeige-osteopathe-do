module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Palette sampled from the logo (public/static/logo.png)
      colors: {
        darkblue: "#124A75",
        darkblueHover: "#A9C5CF",
        lightblue: "#0F6A8F",
        lightblueHover: "#E8F1F5",
        logo: {
          navy: "#0B4D71",
          deep: "#093961",
          teal: "#198F9B",
          seafoam: "#52979F",
          leaf: "#43AD7D",
          accent: "#9D544F",
          gray: "#53575B",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
