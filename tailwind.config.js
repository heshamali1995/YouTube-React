/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark1": "#181818",
        "input": "#121212",
        "search": "#222222",
        "border-form": "#303030",
        "bg-color": "#0f0f0f",
        "light-mode": "#ebebeb",
        "dark-mode": "#242424",
        "aside": "#272727",
        "aside-light": "#f2f2f2",
        "search-light": "#f8f8f8"
      }
    },
  },
  plugins: [],
}