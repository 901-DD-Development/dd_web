module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'tomorrow': ['Tomorrow'],
        'agrandir': ['Agrandir'],
      },
      colors: {
        blue: "#004AAD",
        gray: "#CECECE",
        lighterGray: "#F5F3EF",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};