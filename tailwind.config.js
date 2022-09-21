/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './dist/**/*.{html,js}'
  ],
  theme: {
    extend: {},
    container: {
      center: true
    },
    colors: {
      'main': '#F5512B',
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      white: colors.white,
      black: colors.black
    },
    fontFamily: {
      'rubik': ['"Rubik"', 'sans-serif'],
      'pt-sans': ['"PT Sans"', 'sans-serif'],
    }
  },
  plugins: [],
}
