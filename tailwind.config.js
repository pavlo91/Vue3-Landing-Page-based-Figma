/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          BrightRed: '#F25F3A',
          DarkBlue: '#242D52'
        },
        secondary: {
          DarkGrayishBlue: '#9095A7',
          DarkBlue: '#1D1E25',
          paleRed: '#FFEFEB',
          LightGray: '#FAFAFA'
        }
      }
    },
  },
  plugins: [],
}