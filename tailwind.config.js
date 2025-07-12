/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
        }
      },
      fontFamily: {
        'noto-serif': ['Noto Serif', 'serif'],
        'noto-serif-jp': ['Noto Serif JP', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}