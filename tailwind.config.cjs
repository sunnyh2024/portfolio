/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial' : 'radial-gradient(rgba(255, 255, 255, 0.25) 9%, transparent 15%)',
        'cursor-gradient' : 'radial-gradient(var(--tw-gradient-stops))'
      },
      backgroundSize: {
        'extend-5' : '5vmin 5vmin',
        'extend-45' : '4.5vmin 4.5vmin'
      },
      backgroundPosition: {
        'position-def' : '0% 0%',
        'position-0' : '0% -40%',
        'position-1' : '0% -20%',
        'position-2' : '0% -0%',
        'position-3' : '0% 20%',
        'position-4' : '0% 40%',
        'img-pos-def' : '0% 0%',
        'img-pos-0' : '0% -20%',
        'img-pos-1' : '0% -10%',
        'img-pos-2' : '0% 0%',
        'img-pos-3' : '0% 10%',
        'img-pos-4' : '0% 20%',
      },
      transitionDuration: {
        '400' : '400ms',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
