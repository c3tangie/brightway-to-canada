/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-out': 'fadeOut 1s ease-in-out forwards',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },

      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        sourceSans: ['Source Sans 3', 'sans-serif'],
        dosis: ['Dosis', 'sans-serif'],
        assistant: ['Assistant', 'sans-serif'],
        chironHeiHK: ['Chiron Hei HK', 'sans-serif'],
        RobotoFlex: ['Roboto Flex', 'sans-serif'],
    },
  },
  plugins: [],
}
}
