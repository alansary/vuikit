import VkIcon from './icon'
import { assign } from 'vuikit/src/util/lang'
import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: assign({}, VkIcon.props),
  render: (h, { data, props, children }) =>

    h('a', mergeData(data, { class: 'uk-icon uk-icon-button' }), [
      h(`icon-${props.icon}`, { props })
    ])

}
