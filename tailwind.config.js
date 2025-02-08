/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Ensures Tailwind scans Angular files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4354a4", // Example custom color (blue-800)
        primaryDark: "#111633", // Example custom color (blue-900)
        secondary: "#595959", // Example custom color (purple-600)
        secondaryLight: "#dfdfd5", // Example custom color (purple-200)
        bg: "#ffffff", // Example custom color (gray-100)
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Open Sans as the default sans-serif font
        marko: ["Marko One", "serif"], // Custom font
      },
    },
  },
  plugins: [],
};
