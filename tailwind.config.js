/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        primary: {
          light: '#fff',
          DEFAULT: '#F9F871',
          dark: '#000000',
        },
        secondary: {
          light: '#008283',
          DEFAULT: '#022C43',
          dark: '#333',
        },
        tertiary: {
          light: '#FFA458',
          DEFAULT: '#E69C24',
          dark: '#000000',
        },
      },
      content: {
        home: '"HOME"',
        about: '"ABOUT"',
        contact: '"CONTACT"',
        play: '"PLAY"',
        channel: '"CHANNEL"',
      },
      fontFamily: {
        coolvetica: ['Coolvetica', 'sans-serif'],
        'la-belle-aurore': ['La Belle Aurore', 'cursive'],
      },
      animation: {
        rotateIn: 'rotateIn 1s linear both',
        fadeIn: 'fadeIn 1.2s ease-in-out forwards',
        pulseOnce: 'pulse 2s ease-in-out forwards',
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
        pulseOnce: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: 0.5,
          },
        },
      },
      animationDelay: {
        1400: '1400ms',
        1800: '1800ms',
        1900: '1900ms',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.after-content-home': {
          content: '"HOME"',
        },
        '.after-content-about': {
          content: '"ABOUT"',
        },
        '.after-content-contact': {
          content: '"CONTACT"',
        },
        '.after-content-play': {
          content: '"PLAY"',
        },
        '.after-content-channel': {
          content: '"CHANNEL"',
        },
      }
      addUtilities(newUtilities, ['after'])
    },
  ],
}
