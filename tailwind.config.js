/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#047857',
          blue: '#2563eb',
          navy: '#14283d',
        },
      },
    },
  },
  plugins: [],
};
