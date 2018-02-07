<template>
  <div>
    <story-positions
      withJustifyPosition
      ref="placeholder"
      @change="val => {
        flip = val.flip
        target = val.target
        position = val.position
        boundary = val.boundary
      }"
    ></story-positions>

    <drop v-if="target"
      :show="true"
      :flip="flip"
      :target="target"
      :boundary="boundary"
      :position="position"
    >
      <div class="uk-background-primary uk-padding-small uk-light uk-text-center uk-text-small uk-height-1-1">
        {{ position }}
      </div>
    </drop>
  </div>
</template>

<script>
import { Drop } from '../'
import VkPosition from 'vuikit/src/core/v-position'

export default {
  components: {
    Drop
  },
  directives: {
    VkPosition
  },
  data: (vm) => ({
    flip: true,
    target: null,
    boundary: '',
    position: 'bottom-center'
  })
}
</script>
