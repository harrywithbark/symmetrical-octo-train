import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          white: '#FFFFFF',
          ivory: '#FFFDF9',
          blush: '#FDF5F5',
        },
        accent: {
          rose: '#A35C67',
          'rose-gold': '#E2B4B7',
        },
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        serif: 'var(--font-source-serif)',
        mono: 'var(--font-geist-mono)',
      },
      animation: {
        'infinite-scroll': 'scroll 30s linear infinite',
        'scroll-reverse': 'scroll-reverse 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
