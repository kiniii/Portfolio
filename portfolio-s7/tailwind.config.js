/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom_black': '#242223',
        'custom_lightblack': '#454545'
      }
    },
  },
  plugins: [],
}

