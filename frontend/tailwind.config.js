module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E9C376',
        secondary: '#DFB8AC',
      },
    },

    fontFamily: {
      display: ['Mirage'],
      sans: ['Nunito Sans', 'sans-serif'],
      handwriting: ['BrittanySignature'],
      serif: ['Roboto Slab', 'serif'],
    },
  },
  plugins: [],
};
