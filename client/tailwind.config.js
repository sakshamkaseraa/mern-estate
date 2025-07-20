/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // deep blue
        secondary: '#fbbf24', // amber
        accent: '#10b981', // emerald
        background: '#18181b', // dark background
        surface: '#27272a', // card background
        text: '#f4f4f5', // light text
        muted: '#a1a1aa', // muted text
        danger: '#ef4444', // red
        info: '#38bdf8', // sky
      },
    },
  },
  plugins: [],
}