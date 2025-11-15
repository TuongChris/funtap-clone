/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['HelveticaNeue', 'sans-serif'],
        display: ['Roboto', 'sans-serif'],
      },
      maxWidth: {
        '768': '768px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}