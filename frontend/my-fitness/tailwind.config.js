/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: "#4F1814",
        gold: "#C2A14A",
        dark: "#1A1A1A",
        graymid: "#3C3C3C",
        ivory: "#F5F5F5",
        goldlight: "#E0C77C",
      },
    },
  },
  plugins: [],
}
