/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: 'hsla(30, 100%, 99%, 1)',
        textColor: 'hsla(0, 0%, 7%, 1)',
        orange: 'hsla(19, 58%, 51%, 1)',
        darkBlue: '#202054',
        bodyTextColor: '#3F3F3F'
      },
      fontFamily: {
        'inter': ['Inter', 'sans - serif']
      }
    },
  },
  plugins: [],
}