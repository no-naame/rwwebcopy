import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        inter:[fontFamily],
        lato: ['Lato', 'sans-serif'],
        handwritten: ['Kaushan Script', 'cursive'],
        passionOne: ['"Passion One"', 'sans-serif'],
      },
      lineHeight: {
        '60px': '60px',
        '45px': '45px',
      },
      screens: {
        '2sm': '440px',
        '2lg': '1080px',
        'mxl': '1150px',
      },
      boxShadow: {
        'top-bottom': '0px 4px 8px 0px rgba(29, 29, 27, 0.10), 0px -4px 8px 0px rgba(29, 29, 27, 0.10)',
        custom: '0px 26.786px 117.19px 0px rgba(34, 34, 34, 0.06)',
        'custom-lg': '0px 50px 100px 0px rgba(21, 21, 21, 0.10)',
        'mobileShadow': '0px 2px 5px 0px rgba(0, 0, 0, 0.05), 0px -2px 5px 0px rgba(0, 0, 0, 0.05);',
      },
      animation: {
        'loop-scroll': 'loop-scroll 8s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'loop-scroll': {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-250%)',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;