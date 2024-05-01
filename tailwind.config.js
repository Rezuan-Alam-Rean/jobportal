/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [

      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".btn": {
            "color": "#ffffff",
            "background-color": "#186dbe",
          },
          "body": {
            "color": "#333333",
           
          },
          ".bannerdark": {
            "background-color": "#ecf7fc",
           
          },
          ".bannertext": {
            "color": "#38BDF8",
           
          },
          ".card-title": {
            "color": "#186dbe",
           
          },
          ".card": {
            "background-color": "#ecf7fc",
            
          },

         
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ".btn": {
            
            "color": "#ffffff",
          },
          "body": {
            "color": "#ffffff",
           
          },
          ".bannerdark": {
            "background-color": "#2f4149",
           
          },
          ".bannertext": {
            "color": "#ffffff",
           
          },
          ".card": {
            "background-color": "#2f4149",
            
          },
          ".card-title": {
            "color": "#ffffff",
           
          },
         
        },
      },
    ],
  },
}