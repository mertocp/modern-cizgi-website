import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35', // Orange
          light: '#FF8556',
          dark: '#E65428',
        },
        dark: {
          DEFAULT: '#1A1A1A', // Black
          grey: '#2A2A2A',
        },
        light: {
          DEFAULT: '#FFFFFF', // White
          grey: '#F5F5F5',
          'grey-2': '#E0E0E0',
        },
        grey: {
          DEFAULT: '#666666',
          dark: '#4D4D4D',
          light: '#999999',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
