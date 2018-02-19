import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'h3'
    }
  },
  render: (h, { props, data, children }) =>
    h(props.tag, mergeData(data, { class: 'uk-card-title' }), children)
}
