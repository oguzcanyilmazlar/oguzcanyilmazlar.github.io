/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
  content: ["./index.html", "./goggle/index.html"],
  theme: {
    colors: {
      ...colors
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}

