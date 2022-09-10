import { globalCss } from ".";


export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$corDeFundo',
    '-webkit-font-smoothing': 'antialiased',
  },

  a: {
    textDecoration: 'none',
    cursor: 'pointer',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto , sans-serif',
  },
})