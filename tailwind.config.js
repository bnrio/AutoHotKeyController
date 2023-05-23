/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,handlebars}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
}