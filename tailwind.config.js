/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionDuration: {
        slow: '600ms',
        medium: '400ms',
        fast: '200ms'
      }
    },
  },
  plugins: [],
}