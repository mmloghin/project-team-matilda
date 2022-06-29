/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "archivo-black": ["Archivo", "Space Mono"],
        "indie-flower": ["Indie Flower", "Archivo Black", "Space Mono", "sans-serif", "cursive", "monospace"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
