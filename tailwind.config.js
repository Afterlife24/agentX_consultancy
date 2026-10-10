/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep petrol teal — primary dark surface
        petrol: {
          50: '#e6f4f3',
          100: '#c1e4e1',
          200: '#8fceca',
          300: '#54b0aa',
          400: '#2f918b',
          500: '#1a736e',
          600: '#125953',
          700: '#0f463f',
          800: '#0d3330',
          900: '#0a2624',
          950: '#051817',
        },
        // Chartreuse / lime — bright accent
        chartreuse: {
          50: '#f6ffe0',
          100: '#eaffb3',
          200: '#dcff80',
          300: '#ccf54a',
          400: '#b8e620',
          500: '#9fc70c',
          600: '#7ba00a',
          700: '#5d7a0c',
          800: '#4a610f',
          900: '#3e5211',
          950: '#222d08',
        },
        // Coral / warm amber — secondary accent
        coral: {
          50: '#fff3ed',
          100: '#ffe3d4',
          200: '#ffc2a8',
          300: '#ff9b70',
          400: '#ff7a3f',
          500: '#fb5f1e',
          600: '#ec4a13',
          700: '#c43911',
          800: '#9c2f15',
          900: '#7e2a15',
          950: '#441107',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        'radial-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
