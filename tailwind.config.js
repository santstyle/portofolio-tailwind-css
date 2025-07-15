module.exports = {
  content: ['index.html', './src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#38bdf8',
        dark: '#0f172a',
        secondary: '#6b7280',
      },
      screens: {
        '2xl': '1120px'
      },
    },
  },
  variants: {
    extend: {
      transform: ['responsive', 'hover', 'focus'],
      rotate: ['responsive', 'hover', 'focus'],
      translate: ['responsive', 'hover', 'focus'],
      scale: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};