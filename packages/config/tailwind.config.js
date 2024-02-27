/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../**/*.tsx'],
  theme: {
    borderRadius: {
      DEFAULT: '0.25rem',
      none: '0',
      full: '5rem',
    },
    transitionDuration: {
      base: '350ms',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-next)'],
      },
    },
  },
  plugins: [],
};
