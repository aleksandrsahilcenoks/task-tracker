/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17202a",
        surface: "#f7f8fa",
        line: "#d9dee7",
        brand: "#2563eb",
        success: "#16803c",
        warning: "#b7791f",
        danger: "#c2410c"
      },
      boxShadow: {
        panel: "0 8px 24px rgba(23, 32, 42, 0.08)"
      }
    }
  },
  plugins: []
};
