/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customColor: '#004D8E',
        customBlue: '#54b1ed', 
        customGray: '#9fa7ae',
        customLightBlue:'#edf3f8'
       
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

