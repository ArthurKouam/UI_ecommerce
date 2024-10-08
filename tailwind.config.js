/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      "primary": {
        color: "rgba(186, 173, 154, 1)"
      }
    },
  },
  plugins: [],
}

