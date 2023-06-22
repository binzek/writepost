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
        "clr-gray1": "#EFEFEF",
        "clr-gray2": "#DFDFDF",
        "clr-gray3": "#202020",
        "clr-gray4": "#101010",
        "clr-black": "#000000",
      },
    },
  },
  plugins: [],
};
