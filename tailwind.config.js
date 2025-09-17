/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'wasted-grey': "rgb(119, 116, 116)",
        'wasted-green': "rgb(71, 74, 30)",
      },
    },
  },
  plugins: [],
}