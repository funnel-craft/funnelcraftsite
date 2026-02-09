/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      colors: {
        brand: {
          primary: '#10b981',   // Emerald 500
          glow: '#059669',     // Emerald 600
          dark: '#020204',
          panel: '#0A0B10',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 40s linear infinite',
        'dash': 'dash 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        dash: {
          to: { strokeDashoffset: '24' },
        },
      },
    },
  },
  plugins: [],
}
