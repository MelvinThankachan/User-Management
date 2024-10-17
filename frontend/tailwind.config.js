/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1b22",
        secondary: "#2b2a33",
        tertiary: "#393943",
      },
    },
  },
  plugins: [],
};
