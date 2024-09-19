/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        main: 'calc(100vh - (theme(height.md) + theme(height.xl)));'
      },
    },
  },
  plugins: [],
}