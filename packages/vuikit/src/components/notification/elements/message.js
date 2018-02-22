import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: {
    status: {
      type: String,
      default: '',
      validator: val => !val || val.match(/^(primary|success|warning|danger)$/)
    }
  },
  render (h, { props, data, children }) {
    const { status } = props

    return h('div', mergeData(data, {
      class: ['uk-notification-message', {
        [`uk-notification-message-${status}`]: status
      }]
    }), children)
  }
}
