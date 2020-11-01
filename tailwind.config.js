module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Noto Serif", "serif"],
      },
      colors: {
        "pioco-orange": "#f83e3e",
        "pioco-blue": "#0b3954",
        "pioco-dark": "#333333",
        "pioco-light": "#dddddd",
      },
    },
    container: {
      center: true,
    },
    typography: {
      default: {
        css: {
          color: "#333333",
          fontFamily: "'Noto Serif', serif",
          a: {
            color: "#0b3954",
            "&:hover": {
              color: "#f83e3e",
            },
          },
          h1: {
            fontWeight: 800,
            fontFamily: "'Open Sans', sans-serif",
          },
          h2: {
            fontWeight: 800,
            fontFamily: "'Open Sans', sans-serif",
          },
          h3: {
            fontWeight: 700,
            fontFamily: "'Open Sans', sans-serif",
          },
          h4: {
            fontWeight: 700,
            fontFamily: "'Open Sans', sans-serif",
          },
          h5: {
            fontWeight: 700,
            fontFamily: "'Open Sans', sans-serif",
          },
          h6: {
            fontWeight: 400,
            fontFamily: "'Open Sans', sans-serif",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
