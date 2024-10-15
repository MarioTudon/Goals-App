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
        beat: 'beat 1.5s ease infinite'
      },
      keyframes: {
        beat: {
          '0%': { left: '0' },
          '20%': { left: '5%' },
          '40%': { left: '0' },
          '60%': { left: '5%' },
          '100%': { left: '0' },
        }
      }
    },
  },
  plugins: [],
}