/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionDuration: {
        slow: '600ms',
        medium: '400ms',
        fast: '200ms'
      },
      colors: {
        'gray-200-glass': 'rgba(229, 231, 235, 0.20)'
      }
    },
  },
  plugins: [],
}