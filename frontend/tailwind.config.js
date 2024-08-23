/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "sistro-blue": "#002875",
        "sistro-blue-200": "#001C51",
        "sistro-green": "#33AB1B"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

