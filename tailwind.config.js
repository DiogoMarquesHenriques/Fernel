/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agrix: {
          green: '#1f5f2c',
          'green-dark': '#163d20',
          'green-light': '#2d8a3e',
          yellow: '#f2c94c',
          'yellow-dark': '#d4a83b',
        },
        gray: {
          850: '#1a1f23',
          950: '#0d1114',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(31,95,44,0.92) 0%, rgba(22,61,32,0.88) 100%)',
      },
    },
  },
  plugins: [],
}
