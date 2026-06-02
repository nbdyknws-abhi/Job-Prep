/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: {
          DEFAULT: '#0a0a0f',
          card: '#12121e',
          border: '#1f1f35',
          hover: '#1b1b2f',
        },
        cyber: {
          pink: '#ff007f',
          cyan: '#00f0ff',
          purple: '#9d00ff',
          yellow: '#ffea00',
          green: '#39ff14',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'cyber-cyan': '0 0 10px rgba(0, 240, 255, 0.4)',
        'cyber-pink': '0 0 10px rgba(255, 0, 127, 0.4)',
        'cyber-purple': '0 0 10px rgba(157, 0, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
