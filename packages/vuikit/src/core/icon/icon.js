import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: {
    icon: {
      type: String,
      required: true
    },
    viewBox: String,
    ratio: [String, Number],
    width: [String, Number],
    height: [String, Number]
  },
  render: (h, { data, props, children }) =>

    h('span', mergeData(data, { class: 'uk-icon' }), [
      h(`icon-${props.icon}`, { props })
    ])

}
