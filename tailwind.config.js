/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': {
          light: '#818cf8',
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        'secondary': {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
        'neutral': {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
          '950': '#020617',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'caret-blink': 'caretBlink 0.75s step-end infinite',
        'gradient-bg': 'gradientBg 15s ease infinite',
        'skill-item-appear': 'skillItemAppear 0.5s ease-out forwards',
        'text-pop-up': 'textPopUp 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
        'innovator-pop': 'innovatorPop 1s ease-out forwards',
        'slide-in-from-right': 'slideInFromRight 0.8s ease-out forwards',
        'glitch-and-assemble': 'glitchAndAssemble 1.5s ease-out forwards',
        'svg-line-draw': 'svgLineDraw 1s ease-out forwards',
        'underline-sweep': 'underlineSweep 0.3s ease-out forwards',
        'text-glow': 'textGlow 1.5s ease-in-out infinite alternate',
        'title-breathe': 'titleBreathe 3s ease-in-out infinite alternate',
        'subtle-shimmer': 'subtleShimmer 2s ease-in-out infinite alternate',
        'tech-tag-appear': 'techTagAppear 0.3s ease-out forwards',
        // Animations for About Me section
        'slide-up-fade-in': 'slideUpFadeIn 0.6s ease-out forwards',
        'subtle-pulse': 'subtlePulse 2s infinite ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        caretBlink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' }
        },
        gradientBg: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        skillItemAppear: {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        textPopUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        innovatorPop: {
          '0%': { opacity: '0', filter: 'blur(4px)', transform: 'scale(0.8) translateY(10px)' },
          '100%': { opacity: '1', filter: 'blur(0px)', transform: 'scale(1) translateY(0)' },
        },
        slideInFromRight: {
          '0%': { opacity: '0', transform: 'translateX(80px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glitchAndAssemble: {
          '0%': { opacity: '0', textShadow: '0 0 5px #f0f, 0 0 10px #0ff, 0 0 15px #f0f', transform: 'translateX(-5px) skewX(-10deg)' },
          '10%': { opacity: '1', textShadow: 'none', transform: 'translateX(5px) skewX(10deg)' },
          '20%': { opacity: '0.5', textShadow: '0 0 3px #0ff, 0 0 6px #f0f', transform: 'translateX(-3px) skewX(-5deg)' },
          '30%': { opacity: '1', transform: 'translateX(0) skewX(0)', filter: 'blur(0.5px)' },
          '40%': { filter: 'blur(0px)' },
          '40%, 100%': { opacity: '1', textShadow: 'none', transform: 'translateX(0) skewX(0)' },
        },
        svgLineDraw: {
          'to': { strokeDashoffset: '0' },
        },
        underlineSweep: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        textGlow: {
          'from': { textShadow: '0 0 4px var(--tw-colors-primary-light, #818cf8)' },
          'to': { textShadow: '0 0 10px var(--tw-colors-primary-light, #818cf8), 0 0 1px transparent' },
        },
        titleBreathe: {
          '0%': { textShadow: '0 0 5px transparent, 0 0 10px transparent' },
          '50%': { textShadow: '0 0 8px var(--tw-colors-primary-light), 0 0 15px var(--tw-colors-primary-dark)' },
          '100%': { textShadow: '0 0 5px transparent, 0 0 10px transparent' },
        },
        subtleShimmer: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        techTagAppear: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        imageParallaxZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        // Keyframes for About Me section
        slideUpFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtlePulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.3)' }, // primary
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 10px 5px rgba(99, 102, 241, 0.1)' }, // primary
        }
      }
    }
  },
  plugins: [],
}