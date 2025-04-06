/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'tedx-red': '#eb0028',
        'our-red': '#e14640',
        'our-black': '#191617',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'tedx-red': '#eb0028',
        'our-red': '#e14640',
        'our-black': '#191617',
        'synelixis-blue': '#001a32',
        'synelixis-orange': '#ed6d23',
        'synelixis-yellow': '#f1be3d'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
