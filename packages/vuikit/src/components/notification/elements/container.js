import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: {
    position: {
      type: String,
      default: 'top-center',
      validator: val => val.match(/^(top|bottom)-(left|center|right)$/)
    }
  },
  render (h, { props, data, children }) {
    const { position } = props

    return h('div', mergeData(data, {
      class: [
        'uk-notification',
        `uk-notification-${position}`
      ]
    }), children)
  }
}
