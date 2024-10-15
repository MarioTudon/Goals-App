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
      },
      animation: {
        right: 'right 1.5s ease infinite',
        left: 'left 1.5s ease infinite'
      },
      keyframes: {
        right: {
          '0%': { right: '0' },
          '20%': { right: '5%' },
          '40%': { right: '0' },
          '60%': { right: '5%' },
          '100%': { right: '0' },
        },
        left: {
          '0%': { left: '0' },
          '20%': { left: '-5%' },
          '40%': { left: '0' },
          '60%': { left: '-5%' },
          '100%': { left: '0' },
        }
      }
    },
  },
  plugins: [],
}