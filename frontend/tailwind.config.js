const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobiles: "320px",
        // => @media (min-width: 640px) { ... }
        mobilem: "375px",
        // => @media (min-width: 640px) { ... }
        mobilel: "425px",
        // => @media (min-width: 640px) { ... }
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      minWidth: {
        100: "30rem",
        128: "35rem",
      },
    },
    fontFamily: {
      libre: ['"Libre Franklin"', "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
