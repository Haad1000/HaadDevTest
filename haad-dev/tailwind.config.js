/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // Shades of Teal
        "teal-shadow": "0 0 50px 15px rgba(64, 224, 208, 0.5)", // bg-teal-500
        "teal-light-shadow": "0 0 50px 15px rgba(72, 219, 198, 0.5)", // bg-teal-400
        "teal-dark-shadow": "0 0 50px 15px rgba(45, 204, 192, 0.5)", // bg-teal-600

        // Shades of Emerald
        "emerald-shadow": "0 0 50px 15px rgba(29, 209, 161, 0.5)", // bg-emerald-500
        "emerald-light-shadow": "0 0 50px 15px rgba(36, 213, 176, 0.5)", // bg-emerald-400
        "emerald-dark-shadow": "0 0 50px 15px rgba(22, 198, 160, 0.5)", // bg-emerald-600

        // Shades of Cyan
        "cyan-shadow": "0 0 50px 15px rgba(0, 255, 255, 0.5)", // bg-cyan-500
        "cyan-light-shadow": "0 0 50px 15px rgba(99, 238, 235, 0.5)", // bg-cyan-400
        "cyan-dark-shadow": "0px 0px 30px 15px rgba(0, 230, 229, 0.5)", // bg-cyan-600
      },
      fontFamily: {
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
