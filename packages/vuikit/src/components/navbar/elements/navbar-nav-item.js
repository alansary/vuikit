import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    icon: {
      type: String
    },
    href: {
      type: String
    }
  },
  render (h, { props, data, children }) {
    const { active, title, subtitle, icon, href } = props

    const Icon = icon && h('span', {
      class: 'uk-icon uk-margin-small-right'
    }, [ h(`icon-${icon}`) ])

    const Subtitle = subtitle && h('div', [ title, h('div', {
      class: 'uk-navbar-subtitle'
    }, subtitle) ])

    return h('li', mergeData(data, {
      class: { 'uk-active': active }
    }), [
      h('a', {
        attrs: { href }
      }, [
        Icon,
        Subtitle || title
      ]),
      children
    ])
  }
}
