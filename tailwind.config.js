/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0e1a',
          elevated: '#111827',
        },
        foreground: {
          DEFAULT: '#f1f5f9',
          muted: '#94a3b8',
        },
        primary: {
          DEFAULT: '#6366f1',
          hover: '#818cf8',
          glow: 'rgba(99, 102, 241, 0.3)',
        },
        secondary: {
          DEFAULT: '#ec4899',
          glow: 'rgba(236, 72, 153, 0.3)',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          glow: 'rgba(139, 92, 246, 0.3)',
        },
        glass: {
          DEFAULT: 'rgba(17, 24, 39, 0.5)',
          hover: 'rgba(30, 41, 59, 0.65)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.15)',
        },
        surface: {
          DEFAULT: 'rgba(17, 24, 39, 0.5)',
          hover: 'rgba(30, 41, 59, 0.7)',
          elevated: 'rgba(31, 41, 55, 0.6)',
        },
      },
      maxWidth: {
        container: '1400px',
      },
      borderRadius: {
        'base': '24px',
        'lg': '32px',
      },
      backdropBlur: {
        'base': '20px',
        'heavy': '40px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glass-lg': '0 20px 60px rgba(0, 0, 0, 0.5)',
        'primary': '0 4px 20px rgba(99, 102, 241, 0.3)',
        'primary-lg': '0 8px 30px rgba(99, 102, 241, 0.4)',
      },
      animation: {
        'float': 'float 20s infinite alternate',
        'mesh': 'meshMove 30s ease-in-out infinite alternate',
        'slideup': 'slideup 0.8s ease-out',
        'fadein': 'fadein 1s ease-out',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(10vw, 10vw) rotate(360deg)' },
        },
        meshMove: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(20px, 20px) scale(1.05)' },
        },
        slideup: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadein: {
          '0%': { opacity: '0', marginTop: '20px' },
          '100%': { opacity: '1', marginTop: '0' },
        },
      },
    },
  },
  plugins: [],
}
