import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: {
    src: {
      type: String,
      required: true
    }
  },
  render: (h, { data, props, children }) =>

    h('span', mergeData(data, {
      class: 'uk-icon uk-icon-image',
      style: {
        'background-image': `url(${props.src})`
      }
    }))

}
