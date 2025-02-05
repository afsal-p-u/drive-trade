/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#0D3DE5",
        third: "#F5F7FF",
        light_secondary: "#E6EBFC",
        extra_secondary: "#615EF0",
        medium_secondary: "#2970F3",
        light_primary: "#F8F8F8",
        extra_light_primary: "#F1F1F1",
        light_gray: "#777777",
        dark_blue: "#050B20",
      }
    },
  },
  plugins: [],
}

