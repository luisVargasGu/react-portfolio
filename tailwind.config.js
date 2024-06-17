/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        primary: {
          light: '#fff',
          DEFAULT: '#ffd700',
          dark: '#000000',
        },
      },
      fontFamily: {
        coolvetica: ['Coolvetica', 'sans-serif'],
        'la-belle-aurore': ['La Belle Aurore', 'cursive'],
      },
      animation: {
        rotateIn: 'rotateIn 1s linear both',
        fadeIn: 'fadeIn 1s backwards',
      },
      keyframes: {
        rotateIn: {
          '0%': { opacity: 0, transform: 'rotate(0deg)' },
          '100%': { opacity: 1, transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animationDelay: {
        1400: '1400ms',
        1800: '1800ms',
        1900: '1900ms',
      },
    },
  },
  plugins: [],
}
