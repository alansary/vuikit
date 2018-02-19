import UI from './ui'
import dataMerge from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: dataMerge(UI.props, {
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 120
    }
  }),
  render: (h, { data, props }) =>

    h(UI, dataMerge(data, {
      class: 'vk-skeleton-image',
      props
    }))

}
