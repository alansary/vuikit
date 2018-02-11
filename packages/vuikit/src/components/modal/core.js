import { removeClass } from 'vuikit/src/util/class'
import { activeModals } from './transition'
import EventsMixin from 'vuikit/src/mixins/events'

const doc = document.documentElement

export default {
  mixins: [EventsMixin],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    // the key value that will close the modal,
    // by default ESC. Disable with false
    closeOnKey: {
      type: [Number, Boolean],
      default: 27
    }
  },
  methods: {
    hide () {
      this.$emit('update:show', false)
    }
  },
  mounted () {
    const { on } = this

    // append modal at $root as the styles
    // could be scoped to the app dom
    this.$nextTick(() => this.$root.$el.appendChild(this.$el))

    on(doc, 'keyup', e => {
      const pressedCloseKey = e.keyCode === this.closeOnKey

      if (this.closeOnKey && pressedCloseKey) {
        e.preventDefault()
        this.hide()
      }
    })
  },
  beforeDestroy () {
    // if a modal is destroyed before being closed
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }

    if (!activeModals) {
      removeClass(doc, 'uk-modal-page')
    }
  }
}
