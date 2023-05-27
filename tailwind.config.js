/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '500px',
      'sm': '640px',
      'md':	'768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536',
    },
    extend: {
      animation:{
        coffeeAppear: 'coffeeAppear 1s ease-out forwards'
      },
      keyframes: {
        coffeeAppear: {
          'from': { opacity: '0', transform: 'translateY(3rem)'},
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

