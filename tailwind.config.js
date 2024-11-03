const { colors } = require('./src/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts}",
    "./dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      }
    }
  },
  plugins: []
}
