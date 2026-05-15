/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: '#C6A16E',
          charcoal: '#0B0B0D',
          slate: '#17171B',
        },
      },
      boxShadow: {
        luxury: '0 10px 35px rgba(198, 161, 110, 0.18)',
      },
    },
  },
  plugins: [],
};
