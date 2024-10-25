/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*.html",
    "./src/**/*.{inc,html}",
  ],
  theme: {
    fontFamily: {
      "DM": ["DM Sans", "sans-serif"],
    },
    extend: {

      backgroundColor: {
        'white': '#FFF',
        'dark': '#000000',
        'gray': '#9E9E9E',
        'ligth-gray': '#E0E0E0',
        'yellow': '#D3E061',
      },

      textColor: {
        'dark': '#000000',
        'white': '#FFFFFF',
        'gray': '#808080',
        'ligth-gray': '#E0E0E0',
      },

      borderColor: {
        dark: '#000000',
        gray: '#9E9E9E',
      },

      fontFamily: {
        'DM': ['DM', 'sans-serif'],
      },

      minWidth: {
        '20rem': '20rem', // 320px
        '25rem': '25rem', // 400px
        '30rem': '30rem', // 480px
        '50rem': '50rem', // 800px
      },

      maxWidth: {
        '20rem': '20rem', // 320px
        '25rem': '25rem', // 400px
        '30rem': '30rem', // 480px
        '50rem': '50rem', // 800px
      },


      // 1rem = 16px
      width: {
        '25rem': '25rem', // 400px
        '30rem': '30rem', // 480px
        '50rem': '50rem', // 800px
        '75rem': '75rem', // 1200px
      },

      minHeight: {
        '20rem': '20rem', // 320px
      },

      maxHeight: {
        '20rem': '20rem',
        '25rem': '25rem',
        '30rem': '30rem',
        '50rem': '50rem',
      },

      height: {
        '20rem': '20rem',
        '25rem': '25rem',
        '30rem': '30rem',
        '50rem': '50rem',
      },

      borderRadius:{
        'max': '100%',
      },

      // objectPosition: {
      //   'sticky': 'sticky',
      //   'absolute': 'absolute',
      // },

    },
  },
  plugins: [],
}

