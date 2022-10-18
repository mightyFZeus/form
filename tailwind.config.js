/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: "#F2994A",
        darkBlue: "#4E598C",
        gray: " #BDBDBD",
        blue:"#2F80ED"
      }
    },
  },
  plugins: [],
}