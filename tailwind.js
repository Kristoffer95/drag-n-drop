module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    fontSize: {
      '14': '14px'
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        'light-blue': '#ddeefe',
        'light-grey': '#607179',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      width: {
        // percentage
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        // pexels
        '1' : '1px',
        // '40': '40px',
        '70': '70px',
        }
    }
  },
  variants: {},
  plugins: []
}
