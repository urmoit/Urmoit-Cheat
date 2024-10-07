/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',  // Search HTML files in the root folder for Tailwind classes
    './css/**/*.css', // Search CSS files in the `css` folder for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
