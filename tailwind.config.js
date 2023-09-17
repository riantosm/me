/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        marker: "#3B82F6",
      },
    },
    fontFamily: {
      "custom-1": ["Jost", "sans-serif"],
    },
  },
  plugins: [],
};
