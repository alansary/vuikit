export const props = {
  active: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    validator: val => !val || val.match(/^(small|large)$/)
  },
  type: {
    type: String,
    validator: val => !val || val.match(/^(primary|secondary|danger|text|link)$/)
  }
}

export const def = ({ type, active, size }) => ({
  class: ['uk-button', `uk-button-${type || 'default'}`, {
    'uk-active': active,
    [`uk-button-${size}`]: size
  }]
})
