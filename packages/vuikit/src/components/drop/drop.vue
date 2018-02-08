<script>
import { Drop } from 'vuikit/src/core/drop'
import VkRoot from 'vuikit/src/core/v-root'
import VkPosition from 'vuikit/src/core/v-position'
import EventsMixin from 'vuikit/src/mixins/events'

import { on } from 'vuikit/src/util/event'
import { query } from 'vuikit/src/util/selector'
import { within } from 'vuikit/src/util/filter'
import { MouseTracker } from 'vuikit/src/util/mouse'
import { get, assign, includes } from 'vuikit/src/util/lang'
import { docEl, pointerEnter, pointerLeave } from 'vuikit/src/util/env'
import { findClosestParent, findClosestParents } from 'vuikit/src/util/vue'

let active
let registered

export default {
  name: 'Drop',
  // posClass, a custom constructor option that
  // allows overriding the v-position posClass
  posClass: 'uk-drop',
  mixins: [EventsMixin],
  components: {
    Drop
  },
  directives: {
    VkRoot,
    VkPosition
  },
  props: assign({}, {
    flip: Drop.props.flip,
    offset: Drop.props.offset,
    position: Drop.props.position,
    animation: Drop.props.animation,
    boundaryAlign: Drop.props.boundaryAlign,
    duration: Drop.props.duration,
    target: {
      // type String or Dom
    },
    boundary: {
      // type String or Dom
    },
    mode: {
      type: String,
      default: 'click hover'
    },
    delayShow: {
      type: Number,
      default: 0
    },
    delayHide: {
      type: Number,
      default: 800
    }
  }),
  data: () => ({
    drop: false
  }),
  computed: {
    $parentDrop () {
      return findClosestParent(this)
    }
  },
  render (h) {
    const props = assign({}, this.$props, {
      show: this.drop,
      target: this.$refs.target,
      boundary: this.$refs.boundary
    })

    const on = {
      [pointerEnter]: e => {
        this.clearTimers()

        if (this.mode.match(/hover/)) {
          this.show()
        }
      },
      [pointerLeave]: e => {
        if (this.mode.match(/hover/)) {
          this.hide()
        }
      }
    }

    return h(Drop, { props, on }, this.$slots.default)
  },
  methods: {
    show () {
      this.clearTimers()
      const isTheOneActive = active === this

      if (isTheOneActive) {
        return
      }

      // close all active drops, unless is a parent
      while (active && !this.isChildOf(active) && !this.isParentOf(active)) {
        const parent = active.$parentDrop
        active._hide()
        active = parent
      }

      this.showTimer = setTimeout(this._show, this.delayShow)
    },
    _show () {
      this.drop = true
      this.tracker.init()
      registerGlobalEvents()

      active = this
    },
    hide () {
      const hoverIdle = 200
      this.clearTimers()

      this.isDelaying = this.tracker.movesTo(this.$el)

      if (this.isDelaying) {
        this.hideTimer = setTimeout(this.hide, hoverIdle)
      } else {
        this.hideTimer = setTimeout(this._hide, this.delayHide)
      }
    },
    _hide () {
      this.drop = false
      this.tracker.cancel()

      if (active === this) {
        active = this.$parentDrop
          ? this.$parentDrop
          : null
      }
    },
    isParentOf (instance) {
      const parents = findClosestParents(instance)
      return includes(parents, this)

    },
    isChildOf (instance) {
      const parents = findClosestParents(this)
      return includes(parents, instance)
    },
    toggle () {
      this.drop ? this._hide() : this.show()
    },
    queryElement (str) {
      return query(str) || get(this.$vnode.context.$refs, str)
    },
    clearTimers () {
      clearTimeout(this.showTimer)
      clearTimeout(this.hideTimer)
      this.showTimer = null
      this.hideTimer = null
    },
    initEvents () {
      const { on, show, hide, toggle, mode } = this
      const targetEl = this.$refs.target

      // target events
      if (mode.match(/click/)) {
        on(targetEl, 'click', toggle)
      }

      if (mode.match(/hover/)) {
        on(targetEl, pointerEnter, show)
        on(targetEl, pointerLeave, hide)
      }
    }
  },
  created () {
    this.tracker = new MouseTracker()
  },
  mounted () {
    this.$refs.target = this.queryElement(this.target)
    this.$refs.boundary = this.queryElement(this.boundary)

    if (!this.$refs.target) {
      this.$refs.target = this.$el.previousElementSibling
    }

    this.initEvents()
  },
  beforeDestroy () {
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}

function registerGlobalEvents () {
  if (registered) {
    return
  }

  registered = true
  on(docEl, 'click', ({ target, defaultPrevented }) => {
    if (defaultPrevented || !active) {
      return
    }

    const clickedInside = drop => within(target, drop.$el)
    const clickedTarget = drop => within(target, drop.$refs.target)

    while (active && !clickedInside(active) && !clickedTarget(active)) {
      const parent = active.$parentDrop
      active._hide()
      active = parent
    }
  })
}
</script>
