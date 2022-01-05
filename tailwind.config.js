module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      
      gridTemplateColumns: {
      // Simple 16 column grid
      '24': 'repeat(24, minmax(0, 1fr))',

      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '25': '25',
      }

      
},
  },
  plugins: [],
}
