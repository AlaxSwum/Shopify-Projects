/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './snippets/**/*.liquid',
    './sections/**/*.liquid',
    './assets/*.liquid',
    // Add any other paths to your liquid or HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

