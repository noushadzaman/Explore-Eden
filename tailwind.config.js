/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // "login-bg": "src('public/login-bg.png')",
      },
    },
  },
  plugins: [],
};
