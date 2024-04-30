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
            "color": "#333333",
            
          },
          "body": {
            "color": "#333333",
           
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
        },
      },
    ],
  },
}