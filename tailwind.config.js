/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#0070f3"
      }
    },
    container:{
      center: true,
      padding: {
        Default: "20px",
        md: "40px",
      }
    }
  },
  plugins: [],
}

