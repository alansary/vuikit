import UI from './ui'
import dataMerge from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: UI.props,
  render: (h, { data, props }) =>

    h(UI, dataMerge(data, {
      class: 'vk-skeleton-text',
      props
    }))

}
