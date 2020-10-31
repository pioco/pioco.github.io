module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "pioco-orange": "#f83e3e",
        "pioco-blue": "#0b3954",
        "pioco-dark": "#2d2d2d",
        "pioco-light": "#dddddd",
      },
    },
  },
  variants: {},
  plugins: [],
};
