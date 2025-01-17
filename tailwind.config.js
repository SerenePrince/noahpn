/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spaceblack: "rgba(0, 0, 0, 1)",
        darkpurple: "rgba(48, 25, 52, 1)",
        darkviolet: "rgba(21, 15, 37, 1)",
      },
      backgroundImage: {
        "space-gradient":
          "linear-gradient(-20deg, theme('colors.spaceblack') 0%, theme('colors.darkpurple') 25%, theme('colors.darkviolet') 50%, theme('colors.darkpurple') 75%, theme('colors.spaceblack') 100%);",
      },
      screens: {
        phone: "320px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      animation: {
        "fade-in-up": "fade-in-up 1s forwards",
        "star-movement": "star-movement 30s infinite ease-in-out",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "star-movement": {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
            opacity: 0,
          },
          "50%": {
            transform: "translate(10px, -10px) rotate(20deg)",
            opacity: 1,
          },
          "100%": {
            transform: "translate(-10px, 10px) rotate(40deg)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
