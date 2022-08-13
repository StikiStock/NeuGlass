/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        blur: {
            '0%': {
              backdrop: 'blur(24px)'
            },
            '100%': {
              backdrop: 'blur(0px)'
            },
        }
    },
    animation: {
        blur_out: 'blur 500ms ease-out forwards',
    }
    },
  },
  darkMode: 'media',
  plugins: [],
}
