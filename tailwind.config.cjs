/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        studio: {
          900: '#070B14', // Primary Background
          800: '#0B1220', // Secondary
          700: '#101827', // Surface
          600: '#151F30', // Elevated
        },
        accent: {
          cyan: '#00E5FF',
          orange: '#FF6B1A',
        },
        content: {
          primary: '#F5F7FA',
          secondary: '#94A3B8',
          muted: '#64748B',
        }
      },
      backdropBlur: {
        xs: '2px',
        md: '8px',
        lg: '16px',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};
