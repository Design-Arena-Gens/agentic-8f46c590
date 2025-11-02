import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#b3d4ff',
          300: '#86b9ff',
          400: '#5c9aff',
          500: '#3a7bff',
          600: '#295fe6',
          700: '#214bb4',
          800: '#1d3d8f',
          900: '#1b356f',
        },
      },
    },
  },
  plugins: [],
};

export default config;
