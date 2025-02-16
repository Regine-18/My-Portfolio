/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the "app" folder
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the "components" folder
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'dark-seafoam': '#8FBCC8',
      'darkPaleDescription': '#AAB8C2',
      'pblue': '#A0C1D6',
      'blue': 'rgba(31, 156, 240, 0.3)',
      'pwhite': '#F0F5F9',
      'hlightGray': '#D9D9D9',
      'seafoam': '#33A6B8',
      'seafoam-darker': '#257A8A', // New color
      'softGray': '#F1F1F1',
      'customBlue': '#06213A',
      'hazy-white': 'rgba(240, 245, 249, 0.62)',
      'misty-gray': 'rgba(216, 221, 226, 0.39)',
      'cloud-blue': 'rgba(169, 194, 217, 0.35)',
      'seafoam-green': 'rgba(163, 201, 199, 0.35)',
      'ocean-depth-blue': 'rgba(215, 207, 232, 0.35)',
      'smoke-gray': 'rgba(215, 207, 232, 0.35)',
    },
    backgroundImage: {
      lightGradient: `linear-gradient(to right,
        rgba(4, 71, 122, 1) 1%,    /* #04477a */
        rgba(4, 71, 123, 1) 12%,   /* #04477b */
        rgba(4, 71, 123, 1) 20%,   /* #04477b */
        rgba(1, 28, 51, 1) 100%    /* #011c33 */)`,
      darkGradient: `linear-gradient(to right, 
        rgba(0, 27, 48) 13%, 
        rgba(8, 41, 67) 19%, 
        rgba(5, 40, 67) 26%, 
        rgba(11, 35, 53) 43%, 
        rgba(12, 27, 38) 100%)`,
      lightMode: `linear-gradient(to bottom, 
        rgba(92, 129, 162, 1) 1%,   /* #5c81a2 */
        rgba(3, 78, 136, 1) 8%,    /* #034e88 */
        rgba(7, 42, 69, 1) 40%,
       rgba(7, 47, 69, 1) 70%,
        rgba(1, 28, 51, 1) 100%    /* #011c33 */)`, /* Deep Ocean Blue */
      darkMode: `linear-gradient(to bottom, 
         rgba(0, 27, 48, 0.7) 3%,
        rgba(23, 50, 71, 0.8) 15%,  /* #173247 with 0.8 opacity */
        rgba(5, 40, 67, 0.8) 30%, 
        rgba(11, 35, 53, 0.8) 75%, 
        rgba(12, 27, 38, 0.7) 100%)`,
      'column-background': `linear-gradient(to bottom, 
          rgba(37, 225, 254, 0.5) 0%, 
          rgba(10, 42, 67, 1) 63%
         )`,
      'subtle-hover': `linear-gradient(to bottom, 
          rgba(10, 42, 67) 13%, 
          rgba(59, 172, 182)100%)`,
    },

  },
  plugins: [],
};
