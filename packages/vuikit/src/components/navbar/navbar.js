import mergeData from 'vuikit/src/util/vue-data-merge'
import { content } from './_common'

export default {
  functional: true,
  props: {
    container: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  render (h, { slots, props, data, children }) {
    const { container, transparent } = props

    return h('nav', mergeData(data, {
      class: ['uk-navbar', {
        'uk-navbar-container': container,
        'uk-navbar-transparent': transparent
      }]
    }), content(h, slots()))
  }
}
