/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f5f5dc', // ou la couleur hexadécimale de ton choix
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

