/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'offset': 'rgba(243 243 238)',
        'secondary': '#1F2937',
        'tertiary': '#374151',
      }
    },

    fontFamily: {
      'display': ["font-display"],
    },

  },
  darkMode: "class",
  plugins: [nextui()]
}

