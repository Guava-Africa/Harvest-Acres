/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5C3A2E',   // brown
        accent: '#A3D65C',    // green
        light: '#F9FAF7',     // soft background
        dark: '#2E1F1A'
      }
    },
  },
  plugins: [],
}