/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'wasted-grey': "#fefefe", // D7D6D6
        'wasted-green': "#91992d", // 717821
      },
    },
  },
  plugins: [],
}