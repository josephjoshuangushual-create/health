import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefdf6',
          100: '#d6f9e8',
          200: '#b0f1d4',
          300: '#7ce4b9',
          400: '#41cf98',
          500: '#1cb47e',
          600: '#0e9366',
          700: '#0c7554',
          800: '#0d5d45',
          900: '#0c4c3a',
          950: '#052b21',
        },
        ink: {
          DEFAULT: '#111a27',
          muted: '#55617a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        prose: '46rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
