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
      // rem
      '875': '.875rem',
      // px
      '10px': '10px',
      '14px': '14px'
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    inset: { // top, right, buttom, left
      '0': '0',
      '0px': '0px',
      '42px': '42px',
      '50px': '50px',
      'n50px': '-50px',
      '383px' : '383px',
      'n433px' : '-433px',
      '50px': '50px',
      '80px': '80px',
    },
    boxShadow: {
      '1': '0 8px 16px 5px rgba(0,0,0,0.1)',
    },

    // Transition
    transitionProperty: { // defaults to these values
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background-color',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color'],
      'opacity': 'opacity',
      'transform': 'transform',
    },
    transitionDuration: { // defaults to these values
      'default': '250ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    transitionTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: { // defaults to these values
      'default': '0ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    willChange: { // defaults to these values
      'auto': 'auto',
      'scroll': 'scroll-position',
      'contents': 'contents',
      'opacity': 'opacity',
      'transform': 'transform',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        'light-blue': '#ddeefe',
        'light-grey': '#607179',
        'lighter-grey': '#F2F7FA',
        'black-25': 'rgb(0,0,0, 0.25)',
      },
      spacing: { // padding, 
        // rem
        '96': '24rem',
        '128': '32rem',
        // px
        '4px': '4px',
        '8px': '8px',
        '24px': '24px',
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
        '50px': '50px',
        '70px': '70px',
        '160px': '160px',
        '383px': '383px',
      },
      height: {
        '100_80px': 'calc(100% - 80px)',

        
        '1' : '1px',
        // '40': '40px',
        '50px': '50px',
        '70px': '70px',
        '160px': '160px',
        '383px': '383px',
      }
    }
  },
  variants: {
    backgroundColor: ['focus', 'hover'],

    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ]
}
