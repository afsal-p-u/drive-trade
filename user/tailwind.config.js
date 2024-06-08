/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#0D3DE5",
        light_secondary: "#E6EBFC",
        light_primary: "#F8F8F8",
        light_gray: "#777777"
      }
    },
  },
  plugins: [],
}

