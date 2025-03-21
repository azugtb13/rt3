/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb',
        },
        gray: {
          100: '#dde1ea',
        }
      }
    },
  },
  plugins: [],
};