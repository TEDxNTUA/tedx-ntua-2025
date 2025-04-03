/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'tedx-red': '#eb0028',
        'our-red': '#e14640',
        'our-black': '#191617',
        'synelixis-blue': '#01172F',
        'synelixis-yellow': '#EBBC4B',
        'synelixis-orange': '#B07437'
      }
    }
  },
  plugins: []
};
