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
        'gray-400-transparent': 'rgba(39, 39, 42, 0.60)'
      },
      animation: {
        rightBounce: 'rightBounce 1.5s ease infinite',
        leftBounce: 'leftBounce 1.5s ease infinite'
      },
      keyframes: {
        rightBounce: {
          '0%': { left: '0' },
          '15%': { left: '10%' },
          '30%': { left: '0' },
          '45%': { left: '10%' },
          '100%': { left: '0' },
        },
        leftBounce: {
          '0%': { left: '0' },
          '15%': { left: '-10%' },
          '30%': { left: '0' },
          '45%': { left: '-10%' },
          '100%': { left: '0' },
        }
      }
    },
  },
  plugins: [],
}