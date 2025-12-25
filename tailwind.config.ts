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
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          150: '#ededed',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        brand: {
          red: '#e42927',
          blue: '#0661df',
        },
      },
      fontFamily: {
        almarai: ['var(--font-almarai)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(to bottom, #fafafa, #ffffff)',
        'gradient-dark': 'linear-gradient(to bottom, #171717, #0a0a0a)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #f5f5f5 0px, transparent 50%), radial-gradient(at 80% 0%, #e5e5e5 0px, transparent 50%), radial-gradient(at 0% 50%, #fafafa 0px, transparent 50%)',
      },
      boxShadow: {
        'soft': '0 2px 8px 0 rgb(0 0 0 / 0.04)',
        'medium': '0 4px 16px 0 rgb(0 0 0 / 0.08)',
        'large': '0 8px 32px 0 rgb(0 0 0 / 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
