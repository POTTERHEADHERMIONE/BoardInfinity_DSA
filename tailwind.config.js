/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'swiggy-orange': '#FC8019',
        'swiggy-dark': '#282C3F',
        'eco-green': '#4CAF50',
        'light-gray': '#F8F9FA',
        'medium-gray': '#E9ECEF'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'bounce-in': 'bounceIn 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.4s ease-out'
      }
    },
  },
  plugins: [],
}