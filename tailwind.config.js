/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bread:`url('/img/Vector.png'), url('/img/Vector-1.png')`
      }

    },
  },
  plugins: [],
}