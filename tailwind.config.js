<<<<<<< HEAD

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0a1e36",
          secondary: "#1e3a5a",
          accent: "#3d7ce5",
          light: "#f5f9ff",
        },
        animation: {
          float: "float 10s infinite linear",
          "logo-float": "logoFloat 3s ease-in-out infinite",
        },
        keyframes: {
          float: {
            "0%": { transform: "translateY(0) translateX(0)" },
            "25%": { transform: "translateY(-20px) translateX(20px)" },
            "50%": { transform: "translateY(0) translateX(40px)" },
            "75%": { transform: "translateY(20px) translateX(20px)" },
            "100%": { transform: "translateY(0) translateX(0)" },
          },
          logoFloat: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
        },
      },
    },
    plugins: [],
=======

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0a1e36",
          secondary: "#1e3a5a",
          accent: "#3d7ce5",
          light: "#f5f9ff",
        },
        animation: {
          float: "float 10s infinite linear",
          "logo-float": "logoFloat 3s ease-in-out infinite",
        },
        keyframes: {
          float: {
            "0%": { transform: "translateY(0) translateX(0)" },
            "25%": { transform: "translateY(-20px) translateX(20px)" },
            "50%": { transform: "translateY(0) translateX(40px)" },
            "75%": { transform: "translateY(20px) translateX(20px)" },
            "100%": { transform: "translateY(0) translateX(0)" },
          },
          logoFloat: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
        },
      },
    },
    plugins: [],
>>>>>>> beacccc1efabef91437db78cba40fd7d62d57f5d
  };