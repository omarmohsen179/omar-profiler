/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Single accent token — swap this to re-brand the whole site.
        accent: {
          DEFAULT: '#2dd4bf', // teal-400
          soft: '#5eead4',
          deep: '#0d9488',
        },
        ink: {
          950: '#080b14',
          900: '#0b0f1a',
          850: '#0f1524',
          800: '#131a2c',
          700: '#1c2438',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -12px rgba(45, 212, 191, 0.35)',
      },
      keyframes: {
        'aurora-1': {
          '0%, 100%': { transform: 'translate(-10%, -10%) scale(1)' },
          '50%': { transform: 'translate(10%, 12%) scale(1.25)' },
        },
        'aurora-2': {
          '0%, 100%': { transform: 'translate(8%, 6%) scale(1.1)' },
          '50%': { transform: 'translate(-12%, -8%) scale(1.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'aurora-1': 'aurora-1 18s ease-in-out infinite',
        'aurora-2': 'aurora-2 22s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
