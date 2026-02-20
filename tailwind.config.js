/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom branding
        forest: '#1a2e1a',
        cream: '#FDFCF8',
      },
      fontFamily: {
        // Setting up the "Science & Soul" typography
        serif: ['serif'], 
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [],
}
