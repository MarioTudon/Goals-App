/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        sm: '0.5rem',
        base: '1rem',
        lg: '1.5rem',
        xl: '3rem',
        main: 'calc(100vh - (theme(height.base) + theme(height.xl)));'
      },
    },
  },
  plugins: [],
}