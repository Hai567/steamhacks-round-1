/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    spacing: {
      '90%': '90%',
      "1em": "1em"
    },
    minHeight: {
      '1/2': '50%',
      "5em": "5em"
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

