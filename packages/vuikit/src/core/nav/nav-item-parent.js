import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String
    }
  },
  render (h, { props, data, children }) {
    const { href, title } = props

    return h('li', mergeData(data, {
      class: 'uk-parent'
    }), [

      h('a', {
        attrs: { href }
      }, [ title ]),
      h('ul', {
        class: 'uk-nav-sub'
      }, children)

    ])
  }
}
