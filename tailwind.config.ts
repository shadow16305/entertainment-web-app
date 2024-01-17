/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        red: "#E23E57",
        "almost-black": "#121212",
        "dark-red": "#88304E",
        "reddish-purple": "#522546",
        "dark-blue": "#311D3F",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
