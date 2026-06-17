/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#1A0E06',
        dark: '#0E0703',
        medium: '#241408',
        medium2: '#2E1A0A',
        gold: '#C9922A',
        'gold-light': '#E8B84B',
        sand: '#D4B896',
        'text-light': '#F5EDE0',
        'text-medium': '#C4A882',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
      },
    },
  },
  plugins: [],
}
