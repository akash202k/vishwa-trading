/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22C55E',
      },
    },
  },
  safelist: [
    'bg-green-500',
    'bg-yellow-500',
    'bg-blue-500',
    'text-green-500',
    'text-red-500'
  ],
  plugins: [],
}