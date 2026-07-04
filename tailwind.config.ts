import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5fc',
          100: '#d9e8f7',
          200: '#b6d2ee',
          300: '#86b4e1',
          400: '#5591d0',
          500: '#3572bd',
          600: '#255aa0',
          700: '#1f4880',
          800: '#1d3c68',
          900: '#1c3357',
          950: '#122036',
        },
        // Body copy and headings are rendered in blue, not black.
        ink: {
          DEFAULT: '#1c3357',
          muted: '#4a6285',
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
