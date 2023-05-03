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
    extend: {},
  },
  plugins: [],
}

