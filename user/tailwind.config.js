/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#1B1AFF",
        medium_black: "#101214", 
        light_black: "#181B1F", 
        light_white: "#FCFDFF", 
        light_gray: "#8894A4", 
        ultra_light_blue: "#F5F8FE", 
      }
    },
  },
  plugins: [],
}

