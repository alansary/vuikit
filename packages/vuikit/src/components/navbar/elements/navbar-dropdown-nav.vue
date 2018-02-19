<script>
export default {
  functional: true,
  render (h, { props, children }) {
    return h('ul', { class: 'uk-nav uk-navbar-dropdown-nav' }, [
      children
    ])
  }
}
</script>
