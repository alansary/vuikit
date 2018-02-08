<template>
  <div class="uk-padding">

    <vk-button ref="btn" @click="show = !show">Toggle</vk-button>

    <drop
      v-if="target"
      :show="show"
      :target="target"
    >
      <ui-card />
    </drop>

  </div>
</template>

<script>
import { Drop } from '../'
import VkPosition from 'vuikit/src/core/v-position'

const UiCard = {
  functional: true,
  render (h) {
    const Lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'

    return h('div', {
      class: 'uk-card uk-card-body uk-card-default'
    }, Lorem)
  }
}

export default {
  components: {
    Drop,
    UiCard
  },
  directives: {
    VkPosition
  },
  data: (vm) => ({
    target: false,
    show: false
  }),
  mounted () {
    this.target = this.$refs.btn
  }
}
</script>
