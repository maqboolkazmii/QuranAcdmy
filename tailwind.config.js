/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── AyatBridge Design Tokens ───────────────────────────────────────
      colors: {
        // Primary palette
        emerald: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Brand-specific tokens (use these in components, not raw emerald)
        brand: {
          // Deep emerald green — primary brand colour
          primary:   '#0D5C3A',
          'primary-light': '#1A7A4E',
          'primary-dark':  '#083D27',

          // Muted gold — accent for CTAs, decorative elements
          gold:      '#B8963E',
          'gold-light': '#D4AF6A',
          'gold-dark':  '#8A6E2A',

          // Warm ivory — backgrounds, card fills
          ivory:     '#FAF7F0',
          'ivory-dark': '#F0EAD6',

          // Dark charcoal — body text
          charcoal:  '#1C2526',
          'charcoal-light': '#3A4445',
        },
      },

      fontFamily: {
        // English — elegant serif headline + clean sans body
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        // Arabic / Urdu RTL fonts (loaded via Google Fonts)
        arabic: ['var(--font-noto-naskh)', 'serif'],
        urdu:   ['var(--font-noto-nastaliq)', 'serif'],
      },

      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '30':  '7.5rem',
        '128': '32rem',
      },

      borderRadius: {
        'xl':  '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      boxShadow: {
        'brand':    '0 4px 24px 0 rgba(13, 92, 58, 0.12)',
        'brand-lg': '0 8px 48px 0 rgba(13, 92, 58, 0.18)',
        'gold':     '0 4px 24px 0 rgba(184, 150, 62, 0.20)',
      },

      backgroundImage: {
        // Subtle Islamic geometric pattern overlay (SVG data URI)
        'geometric-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D5C3A' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },

      animation: {
        'fade-in':     'fadeIn 0.5s ease-in-out',
        'slide-up':    'slideUp 0.6s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
