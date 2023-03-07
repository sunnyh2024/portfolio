/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial' : 'radial-gradient(rgba(255, 255, 255, 0.25) 9%, transparent 9%)'
      },
      backgroundSize: {
        'extend-5' : '5vmin 5vmin',
        'extend-45' : '4.5vmin 4.5vmin'
      },
      backgroundPosition: {
        'position-def' : '0% 0%',
        'position-0' : '0% -15%',
        'position-1' : '0% -5%',
        'position-2' : '0% 5%',
        'position-3' : '0% 15%',
        'img-pos-def' : '0% 0%',
        'img-pos-0' : '0% -30%',
        'img-pos-1' : '0% -10%',
        'img-pos-2' : '0% 10%',
        'img-pos-3' : '0% 30%',
      },
      transitionDuration: {
        '400' : '400ms',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
