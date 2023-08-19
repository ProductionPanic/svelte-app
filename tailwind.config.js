/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.svelte"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    // add your settings here
  }
}

