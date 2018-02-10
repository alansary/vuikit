import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: {
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: true
    },
    href: {
      type: String
    }
  },
  render (h, { props, data }) {
    const { href, active, icon } = props

    return h('li', mergeData(data, {
      class: { 'uk-active': active }
    }), [

      h('a', {
        attrs: { href },
        class: 'uk-icon'
      }, [
        h(`icon-${icon}`, { props })
      ])

    ])

  }
}
