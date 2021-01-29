const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      }
    },
    container: {
      center: true,
      padding: "2rem",
  },
    height: (theme) => ({
      "screen/2": "50vh",
      "screen/3": "calc(100vh * .65)",
      "screen/4": "calc(100vh / 4)",
      "screen/5": "calc(100vh * .1)",
      "screen/6": "calc(100vh * .07)",
      "screen/7": "calc(100vh * .51)",
      "screen/1": "100vh",
  }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
