/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  //     This key specifies how Tailwind CSS should handle dark mode.
  //  The value 'class' means that dark mode will be toggled by adding
  //  a dark class to the root element (usually <html>). This is useful
  //   for implementing a dark mode theme that can be controlled programmatically
  //    by adding or removing the dark class.
  // javascript

  theme: {
    extend: {
      colors: {
        primary: "#b68bdcb1",
        secondary: "#2E4CFF",
      },
    },
  },
  plugins: [],
};
