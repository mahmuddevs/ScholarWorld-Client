/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-text': '#1b1b27',
        'brand-background': '#f5faff',
        'brand-primary': '#0066cc',
        'brand-secondary': '#8a8aef',
        'brand-accent': '#4242fa',
        'dark-text': '#d8d8e4',
        'dark-background': '#00050a',
        'dark-primary': '#3399ff',
        'dark-secondary': '#101075',
        'dark-accent': '#0505bd',
        'card-accent': '#e9f2fd'
      },
    },
  },
  plugins: [daisyui],
}

