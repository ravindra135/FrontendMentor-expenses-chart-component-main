/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "soft-red": "var(--softRed)",
        "hover-red": "var(--hoverRed)",
        "cyan": "var(--cyan)",
        "darkBrown": "var(--darkBrown)",
        "mediumBrown": "var(--mediumBrown)",
        "cream": "var(--cream)",
        "veryPaleOrange": "var(--veryPaleOrange)"
      },
    },
  },
  plugins: [],
}
