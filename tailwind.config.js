module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all your source files are scanned
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'fade-in': 'fade-in 1s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
