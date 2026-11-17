/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bmw: {
          bg: '#080808',
          surface: '#141414',
          card: '#181818',
          panel: '#1E1E1E',
          blue: '#1C69D4',
          'blue-dark': '#0d47a1',
          'blue-light': '#4c93f0',
          mBlue: '#0066B1',
          mDarkBlue: '#002B49',
          mRed: '#E00000',
          text: '#FFFFFF',
          muted: '#A3A3A3',
          border: '#292929',
          borderLight: '#383838'
        }
      },
      fontFamily: {
        sans: ['"Outfit"', '"Century Gothic"', '"Avenir Next"', '"Urbanist"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['"Outfit"', '"Century Gothic"', '"Avenir Next"', '"Urbanist"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Bebas Neue"', '"Anton"', '"Oswald"', '"Impact"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"Outfit"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'bmw-glow': '0 0 25px rgba(28, 105, 212, 0.25)',
        'bmw-glow-lg': '0 0 50px rgba(28, 105, 212, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    },
  },
  plugins: [],
}
