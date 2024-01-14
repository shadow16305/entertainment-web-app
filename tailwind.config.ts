/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        "extra-dark-blue": "#10141E",
        "grey-blue": "#5A698F",
        "dark-blue": "#161D2F",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
