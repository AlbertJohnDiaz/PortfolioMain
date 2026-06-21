/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#0B1120',
        card: '#111827',
        blue: { DEFAULT: '#2563EB', 600: '#2563EB' },
        cyan: { DEFAULT: '#06B6D4' },
        purple: { DEFAULT: '#7C3AED' },
        snow: '#F8FAFC',
        slate: { DEFAULT: '#94A3B8' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #2563EB, 0 0 10px #2563EB, 0 0 20px #2563EB' },
          '100%': { boxShadow: '0 0 10px #06B6D4, 0 0 30px #06B6D4, 0 0 60px #06B6D4' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '2xl': '20px',
      },
    },
  },
  plugins: [],
};
