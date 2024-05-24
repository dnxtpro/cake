/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{

    },
    colors:{
      'fondo':{
        200:'#E6E6FA',
        100:'#FFFDD0',
        300:'#ccca9f'

    },
    'texto':{
      100:'#9b9b9b',
      200:'#adb000'
    },
    'acento':{
      100:'#FFD700',
      200:'#E91E63'
    },
    'principal':{
      100:'#FF6347',
      200:'#dc442e',
      300:'#8d0000'
    },
  },
    extend: {
      'desert':"url('./src/assets/dessert-13.svg')"
    },
  },
  plugins: []

});


