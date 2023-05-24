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
        "clr-white": "#FFFFFF",
        "clr-gray1": "#E8E8E8",
        "clr-gray2": "#B7B7B7",
        "clr-gray3": "#8C8C8C",
        "clr-gray4": "#525252",
        "clr-black": "#000000",
      },
    },
  },
  plugins: [],
};
