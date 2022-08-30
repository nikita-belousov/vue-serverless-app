const formKitTailwind = require('@formkit/themes/tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,js}",
    "./formkit.config.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent': '#42b883',
      },
    },
  },
  plugins: [formKitTailwind],
}
