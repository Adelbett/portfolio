/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030712', // Ultra dark void
          900: '#070d1e', // Deep space navy (main background)
          850: '#0b152d', // Deep card base
          800: '#111f43', // Elevated container
          700: '#1d2f5d', // Highlight borders
        },
        accent: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          violet: '#8a2be2',
        }
      },
      backgroundImage: {
        'deep-space-gradient': 'radial-gradient(circle at 50% 20%, #0d1b3e 0%, #070d1e 60%, #030712 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-cyan': '0 0 25px rgba(0, 242, 254, 0.25)',
        'glow-blue': '0 0 25px rgba(79, 172, 254, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
