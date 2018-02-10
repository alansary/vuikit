import VkIcon from './icon'
import { assign } from 'vuikit/src/util/lang'
import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: assign({}, VkIcon.props, {
    reset: {
      type: Boolean,
      default: false
    }
  }),
  render: (h, { data, props, children }) =>

    h('a', mergeData(data, {
      class: ['uk-icon', {
        'uk-icon-link': props.reset
      }]
    }), [
      h(`icon-${props.icon}`, { props })
    ])

}
