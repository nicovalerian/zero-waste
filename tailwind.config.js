// tailwind.config.js

module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#004D3D",
          secondary: "#ffffff",
          accent: "#D1D1D1",
        },
        fontFamily: {
          thin: ["Raleway-Thin", "sans-serif"],
          thinitalic: ["Raleway-ThinItalic", "sans-serif"],
          light: ["Raleway-Light", "sans-serif"],
          italic: ["Raleway-Italic", "sans-serif"],
          regular: ["Raleway-Regular", "sans-serif"],
          medium: ["Raleway-Medium", "sans-serif"],
          mediumitalic: ["Raleway-MediumItalic", "sans-serif"],
          semibold: ["Raleway-SemiBold", "sans-serif"],
          semibolditalic: ["Raleway-SemiBoldItalic", "sans-serif"],
          bold: ["Raleway-Bold", "sans-serif"],
          bolditalic: ["Raleway-BoldItalic", "sans-serif"],
          black: ["Raleway-Black", "sans-serif"],
          blackitalic: ["Raleway-BlackItalic", "sans-serif"],
          extrabold: ["Raleway-ExtraBold", "sans-serif"],
          extrabolditalic: ["Raleway-ExtraBoldItalic", "sans-serif"],
        },
      },
    },
    plugins: [],
  }