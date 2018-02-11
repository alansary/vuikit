<script>
import core from './core'
import Transition from './transition'
import VkHeightViewport from 'vuikit/src/directives/height-viewport'
import { ModalFull, ModalDialog } from 'vuikit/src/core/modal'

export default {
  name: 'ModalFull',
  extends: core,
  directives: {
    VkHeightViewport
  },
  props: {
    // determines close button display
    closeBtn: {
      type: Boolean,
      default: false
    }
  },
  render (h) {
    const def = {
      props: {
        expand: 'full'
      },
      directives: [{
        name: 'show',
        value: this.show
      }]
    }

    const modal = h(ModalFull, def, [
      h(ModalDialog, {
        class: 'uk-flex uk-flex-center uk-flex-middle',
        directives: [{
          name: 'vk-height-viewport'
        }]
      }, this.$slots.default)
    ])

    return h(Transition, [ modal ])
  }
}
</script>
