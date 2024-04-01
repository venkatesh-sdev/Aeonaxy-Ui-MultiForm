/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,js}', './index.html'],
  theme: {
    extend: {
      textColor: {
        link: '#4853f3',
        warning: '#f35c48',
        button: '#fff',
        primary: '#000',
        secondary: '#777',
      },
      backgroundColor: {
        button: '#ec35b5',
      }
    },
  },
  plugins: [],
}

