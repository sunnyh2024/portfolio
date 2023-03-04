/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial' : 'radial-gradient(rgba(255, 255, 255, 0.1) 9%, transparent 9%)'
      },
      backgroundSize: {
        'extend-5' : '5vmin 5vmin',
        'extend-45' : '4.5vmin 4.5vmin'
      },
      backgroundPosition: {
        'position-def' : '0% -50%',
        'position-0' : '0% -30%',
        'position-1' : '0% -40%',
        'position-2' : '0% -60%',
        'position-3' : '0% -70%',
      },
      transitionDuration: {
        '400' : '400ms',
      },
    },
  },
  plugins: [],
}
