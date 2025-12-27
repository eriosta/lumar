/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2d5016',
          light: '#3d6b21',
          dark: '#1d3a0e'
        },
        sage: {
          DEFAULT: '#87a96b',
          light: '#a4bf8d',
          dark: '#6a8854'
        },
        earth: '#6b4423',
        sand: {
          DEFAULT: '#e8dcc4',
          light: '#f4f1ea',
          dark: '#d4c8b0'
        },
        river: '#4a90a4',
        sunset: {
          DEFAULT: '#d97642',
          light: '#e8824d',
          dark: '#c46535'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
