/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
      xxs: {'min': '0px', 'max': '768px'},
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
      '4xl': '2500px',
      '5xl': '3000px',
      '6xl': '3500px',
    },
    extend: {
      backgroundColor: {
        'offset': 'rgba(243 243 238)',
        'secondary': '#1F2937',
        'tertiary': '#374151',
      },

    },

    fontFamily: {
      'display': ["font-display"],
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

