/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        mullish:["Mullish","sans-serif"],

      },
      backgroundImage:{
      'hero':"url('\images\feature-section-2BG.svg')",
      },

      colors:{
        deepblue:"#02042a",
         dolly:"#181c2e",
      }
    
    },


  },
  plugins: [],
}

