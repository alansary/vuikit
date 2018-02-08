export default {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  render (h, { props }) {
    return h('li', { class: 'uk-nav-header' }, props.title)
  }
}
