module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page-background-mobile': "url('/img/bg.jpg')",
        'page-background-desktop': "url('/img/bg--desktop.jpg')",
        'checkbox-checked': "url('/img/checkbox--checked.svg')",
        'checkbox-unchecked': "url('/img/checkbox--unchecked.svg')",
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        primary: '#E9C376',
        secondary: '#DFB8AC',
      },
      height: {
        18: '4.5rem',
      },
      width: {
        18: '4.5rem',
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
