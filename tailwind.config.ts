import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6fa',
          100: '#e6ebf3',
          200: '#cbd6e6',
          300: '#a3b6d2',
          400: '#7591b7',
          500: '#52719c',
          600: '#3c5782',
          700: '#314764',
          800: '#2b3b52',
          900: '#283446',
          950: '#161d2b',
        },
        ink: {
          DEFAULT: '#1a2230',
          muted: '#5b6675',
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
