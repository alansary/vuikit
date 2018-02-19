import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: {
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    href: {
      type: String
    },
    title: {
      type: String,
      required: true
    }
  },
  render (h, { props, data, children, slots }) {
    const { active, icon, title, href } = props

    return h('li', mergeData(data, {
      class: { 'uk-active': active }
    }), [
      h('a', {
        attrs: { href }
      }, [
        icon && h('span', {
          class: ['uk-icon uk-margin-small-right']
        }, [ h(`icon-${props.icon}`) ]),
        title
      ])
    ])
  }
}
