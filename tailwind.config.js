/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      boxShadow: {
        customButton: '0px 2px 4px 0px  rgba(0, 0, 0, 0.05)',
        customPopup: '0px 0px 10px 0px rgba(0, 0, 0, 0.10)',
      },
      lineHeight: {
        customNormal: 1.2,
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        customMkt: {
          primary: '#F2790B',
          secondary: '#FFD8AA',
          error: '#BF1818',
          black: '#110B0A',
          gray1: '#EAECEA',
          gray2: '#DADADA',
          gray3: '#A5A5A5',
          gray4: '#E7E7E7',
          gray5: '#EFEFEF',
          gray6: '#909090',
          gray7: '#C9D8CC',
          gray8: '#606261',
          lightWhite: '#F6F6F6',
          whiteF9: '#F9F9F9',
          whiteF0: '#F0F0F0',
          whiteF2: '#F2F2F2',
          green: '#2F7958',
          grenLight: '#2F79584D',
          blueLight: '#5F7880',
          primaryLight: '#ED7C004D',
          hoverPrimary: '#FFBC6E26',
        },
        statusMkt: {
          pendent: '#EEBE10',
          accepted: '#2F7958',
          separation: '#09CFFB',
          delivery: '#276EFF',
          concluded: '#F9871F',
          canceled: '#BF1818',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          secondary: 'hsl(var(--secondary))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      transitionDelay: {
        2000: '2000ms',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': {
            opacity: 0,
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.2s linear',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
