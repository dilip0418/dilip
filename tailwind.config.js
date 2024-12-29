/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        'web-extend-dynamic': 'webExtendDynamic 1s ease-in forwards',
        'spider-climb': 'spiderClimb 1s ease-in forwards',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        webExtendDynamic: {
          '0%': { height: '0', bottom: '2.5rem', opacity: '1' },
          '100%': { height: '50vh', bottom: 'calc(50vh + 2.5rem)', opacity: '0' },
        },
        spiderClimb: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-50vh)', opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],

}

