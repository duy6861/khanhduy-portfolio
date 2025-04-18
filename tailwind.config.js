/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      colors: {
        'primary': '#007bff',
        'primary-dark': '#0056b3',
      },
      fontFamily: {
        'sans': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

