/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C6A16E',
          panel: '#12131A',
          dark: '#08090D',
        },
      },
    },
  },
  plugins: [],
};
