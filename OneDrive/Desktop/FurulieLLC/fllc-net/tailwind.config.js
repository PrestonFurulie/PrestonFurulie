/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f3ff',
          green: '#00ff41',
          pink: '#ff00ff',
          yellow: '#ffff00',
          blue: '#00d4ff',
          orange: '#ffaa00',
        },
      },
    },
  },
  plugins: [],
};
