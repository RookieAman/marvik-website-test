/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        biotif: ["Biotif"],
        biotiflight: ["Biotif-Light"],
        biotifbold: ["Biotif-Bold"],
      },
    },
  },
  plugins: [],
};
