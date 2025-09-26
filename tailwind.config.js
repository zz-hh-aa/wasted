/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'wasted-grey': "#E8E6E7", 
        'wasted-lime': "#BABB15", 
        'wasted-camo': "#61623B"
      },
      fontFamily: {
        'geologica': ['Geologica', 'sans-serif'],
      },
      fontWeight: {
        'thin': '300',
      },
    },

  },
  plugins: [],
}