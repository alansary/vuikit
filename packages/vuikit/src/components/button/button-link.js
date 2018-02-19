import mergeData from 'vuikit/src/util/vue-data-merge'
import { assign } from 'vuikit/src/util/lang'
import { props, def } from './_common.js'

export default {
  functional: true,
  props: assign({}, props),
  render (h, { props, data, children }) {
    return h('a', mergeData(data, def(props)), children)
  }
}
