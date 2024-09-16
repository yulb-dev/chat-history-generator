/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#1a1b19',
        'text-bg': '#94ec6a',
      },
    },
  },
  plugins: [],
}
