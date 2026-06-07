/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // <-- THIS TELLS TAILWIND TO LOOK AT APP.JSX
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }