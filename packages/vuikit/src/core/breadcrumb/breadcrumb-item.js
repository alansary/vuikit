import mergeData from 'vuikit/src/util/vue-data-merge'
import { isUndefined } from 'vuikit/src/util/lang'

export default {
  functional: true,
  props: {
    href: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render: (h, { props, data, children }) => {
    const { href, disabled } = props

    return h('li', mergeData(data, {
      class: {
        'uk-disabled': disabled
      }
    }), [
      (isUndefined(href) || disabled)
        ? h('span', children)
        : h('a', { attrs: { href } }, children)
    ])
  }
}
