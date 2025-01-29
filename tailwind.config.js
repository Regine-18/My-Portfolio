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
        'customBlue':'#06213A',
        'hazy-white': 'rgba(240, 245, 249, 0.62)',
        'misty-gray': 'rgba(216, 221, 226, 0.39)',
        'cloud-blue': 'rgba(169, 194, 217, 0.35)',
        'seafoam-green': 'rgba(163, 201, 199, 0.35)',
        'ocean-depth-blue': 'rgba(215, 207, 232, 0.35)',
        'smoke-gray': 'rgba(215, 207, 232, 0.35)',
      },
      backgroundImage: {
        blueGradient: `linear-gradient(to right, 
        rgba(0, 27, 48) 13%, 
        rgba(8, 41, 67) 19%, 
        rgba(5, 40, 67) 26%, 
        rgba(11, 35, 53) 43%, 
        rgba(12, 27, 38) 100%)`,
        'light-mode': `linear-gradient(to bottom, 
 rgba(18, 63, 102, 1) 10%,  /* Deep Ocean Blue */
  rgba(52, 90, 133, 1) 30%,  /* Cool Blue */
  rgba(8, 98, 123, 1) 50%,   /* Vibrant Teal */
  rgba(0, 51, 79, 1) 70%,    /* Dark Aqua */
  rgba(0, 32, 55, 1) 100%    /* Deepest Ocean */)`, /* Deep Ocean Blue */
        'dark-mode': `linear-gradient(to bottom, 
          rgba(0, 27, 48, 0.8) 13%, 
          rgba(8, 41, 67, 0.8) 19%, 
          rgba(5, 40, 67, 0.80) 26%, 
          rgba(11, 35, 53, 0.8) 43%, 
          rgba(12, 27, 38) 100%)`,
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
