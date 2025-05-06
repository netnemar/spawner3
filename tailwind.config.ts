import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'grid-drift': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50px)' }
        }
      },
      animation: {
        'grid-drift': 'grid-drift 20s linear infinite'
      },
      colors: {
        'spawner-green': '#00ff9d'
      }
    },
  },
  plugins: [],
}

export default config 