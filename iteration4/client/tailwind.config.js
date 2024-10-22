/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{inc,html}",
  ],
  theme: {
    fontFamily: {
      "DM": ["DM Sans", "sans-serif"],
    },
    extend: {

      backgroundColor: {
        'white': '#FFF',
        'dark': '#0000',
        'gray': '#9E9E9E',
        'ligth-gray': '#E0E0E0',
        'yellow': '#D3E061',
      },

      textColor: {
        'dark': '#000000',
        'white': '#FFFFFF',
        'gray': '#808080',
      },

      borderColor: {
        dark: '#000000',
        gray: '#9E9E9E',
      },

      fontFamily: {
        'DM': ['DM', 'sans-serif'],
      },

      minWidth: {
        '20rem': '20rem',
      },

      maxWidth: {
        '30rem': '30rem',
      },

      width: {
        '25rem': '25rem',
        '50rem': '50rem',
      },

      minHeight: {
        '20rem': '20rem',
      },

      maxHeight: {
        '30rem': '30rem',
      },

      height: {
        '25rem': '25rem',
        '50rem': '50rem',
      },

    },
  },
  plugins: [],
}

