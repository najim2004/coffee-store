/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "cursive"],
      },
      colors: {
        eyeColor: "#D2B48C",
        editColor: "#3C393B",
        deleColor: "#EA4744",
        cardBg: "#F5F4F1",
      },
    },
  },
  plugins: [require("daisyui")],
};
