/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        'sm': '430px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1728px',
      },
      fontFamily: {
        Lato: ["Lato", "system-ui"],
        Raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: '#5865F2', 
        black: '#000000',
        white: '#ffffff',
        green: '#57f287',
        yellow: '#fee75c',
        fuchsia: '#eb459e',
        red: '#ed4245',
      },
    },
  },
  plugins: [],
}
