/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        // If you already have a red color palette, you can use it
        red: {
          50: '#fee',
          100: '#fcc',
          200: '#f99',
          300: '#f66',
          400: '#f33',
          500: '#f00',
          600: '#c00',
          700: '#900',
          800: '#600',
          900: '#300',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-out': 'fadeOut 1s ease-in-out forwards',
        'wipe-reveal': 'wipe-reveal 3s ease-out forwards',
        'slogan-part1': 'slogan-reveal 4s ease-out forwards 1s',
        'slogan-part2': 'slogan-reveal 4s ease-out forwards 3s',
        'slogan-part1-slow': 'slogan-reveal 1.3s ease-out forwards 0.5s',
        'slogan-part2-slow': 'slogan-reveal 1.3s ease-out forwards 1.8s',

      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        'wipe-reveal': {
          '0%': {
            opacity: '0',
            clipPath: 'inset(0 100% 0 0)', 
          },
          '100%': {
            opacity: '1',
            clipPath: 'inset(0 0 0 0)',
          },
        },

        'slogan-reveal': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        'slogan-wipe-left': {
          '0%': { opacity: 0, transform: 'translateX(-50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slogan-wipe-right': {
          '0%': { opacity: 0, transform: 'translateX(50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },

        'slogan-fade-scale': {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
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
