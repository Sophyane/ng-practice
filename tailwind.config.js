/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-pro": "#5a20d4",
        "secondary-color": "#fca722",
        "warn-color": "#ff0000",
        "success-color": "#00ff00",
      },
    },
  },
  plugins: [],
};
