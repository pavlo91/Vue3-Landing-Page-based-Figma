/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B1CCC5',
        boldPrimary: '#E0E3E1',
      }
    },
  },
  plugins: [],
}