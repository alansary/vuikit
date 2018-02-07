export default {
  functional: true,
  render: (h, { children }) => {
    return h('ul', { class: 'uk-nav uk-dropdown-nav' }, children)
  }
}
