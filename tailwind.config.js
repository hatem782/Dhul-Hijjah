/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Ensures Tailwind scans Angular files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Example custom color (blue-800)
        secondary: "#9333EA", // Example custom color (purple-600)
        accent: "#F59E0B", // Example custom color (amber-500)
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Open Sans as the default sans-serif font
        marko: ["Marko One", "serif"], // Custom font
      },
    },
  },
  plugins: [],
};
