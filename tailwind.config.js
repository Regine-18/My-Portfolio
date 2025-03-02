/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
       paleGray: '#AAB8C2',
       blue: '#A0C1D6',
       white: '#D9D9D9',
       gunMetalBlue:'#2D6A9F',
       deepBlue:'#3776ab',
    },
    backgroundImage: {
      lightGradient: `linear-gradient(to right,
        rgba(4, 71, 122, 1) 1%,   
        rgba(4, 71, 123, 1) 12%,
        rgba(4, 71, 123, 1) 20%,
        rgba(1, 28, 51, 1) 100%)`,
      darkGradient: `linear-gradient(to right, 
        rgba(0, 27, 48) 13%, 
        rgba(8, 41, 67) 19%, 
        rgba(5, 40, 67) 26%, 
        rgba(11, 35, 53) 43%, 
        rgba(12, 27, 38) 100%)`,
      lightMode: `linear-gradient(to bottom, 
        rgba(92, 129, 162, 1) 1%,
        rgba(3, 78, 136, 1) 8%,
        rgba(7, 42, 69, 1) 40%,
        rgba(7, 47, 69, 1) 70%,
        rgba(1, 28, 51, 1) 100%)`,
      darkMode: `linear-gradient(to bottom, 
         rgba(0, 27, 48, 0.7) 3%,
        rgba(23, 50, 71, 0.8) 15%,
        rgba(5, 40, 67, 0.8) 30%, 
        rgba(11, 35, 53, 0.8) 75%, 
        rgba(12, 27, 38, 0.7) 100%)`,
    },
  },
  plugins: [],
};
