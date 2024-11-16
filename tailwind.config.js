const { colors } = require('./src/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts}",
    "./dist/**/*.js",
    "./styles/**/*.css",
    "./resume/**/*.html",
    "./db-index/**/*.html",
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
