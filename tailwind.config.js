module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'deep': {
          100: '#0c0032',
          200: '#190061',
          300: '#240090',
          400: '#3500d3',
          500: '#282828',
        },
        // ...
      }
    },
  },

  plugins: [],
};
