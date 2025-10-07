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
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-outline-camo': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#61623B00 #0000', // camo on transparent
          '&::-webkit-scrollbar': {
            width: '8px',
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
            border: '2px solid #61623B',
            'border-radius': '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
        },
        '.scrollbar-outline-grey': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#E8E6E700 #0000', // grey on transparent
          '&::-webkit-scrollbar': {
            width: '8px',
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
            border: '2px solid #E8E6E7',
            'border-radius': '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
        },
      });
    }
  ],
}