import { eventShow, eventHide } from './events'

import { on } from 'vuikit/src/util/event'
import { within } from 'vuikit/src/util/filter'
import { findParent } from 'vuikit/src/util/vue'

import { pointerEnter, pointerLeave, pointerDown } from 'vuikit/src/util/env'

export let active

on(window, 'resize', ({ defaultPrevented }) => {
  const justified = active && active.position.match(/justify/)

  if (!defaultPrevented && justified) {
    active.$forceUpdate()
  }
})

on(document.documentElement, 'click', ({ target, defaultPrevented }) => {
  if (defaultPrevented || !active) {
    return
  }

  const clickedInside = drop => within(target, drop.$el)
  const clickedTarget = drop => within(target, drop.$refs.target)

  while (active && !clickedInside(active) && !clickedTarget(active)) {
    const parent = findParent(active)
    active._hide()
    active = parent
  }
})

export default {
  data: () => ({
    shown: false
  }),
  methods: {
    show () {
      this.clearTimers()
      this.showTimer = setTimeout(this._show, this.delayShow)
    },
    _show () {
      // close all active drops, unless is a parent
      while (active && !this.isChildOf(active) && !this.isParentOf(active)) {
        const parent = findParent(active)
        active._hide()
        active = parent
      }

      this.shown = true
      this.tracker.init()

      active = this
      this.$emit(eventShow)
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
      this.shown = false
      this.tracker.cancel()

      if (active === this) {
        const parent = findParent(active)
        active = parent || null
      }
      this.$emit(eventHide)
    },
    toggle () {
      this.shown ? this._hide() : this.show()
    },
    clearTimers () {
      clearTimeout(this.showTimer)
      clearTimeout(this.hideTimer)
      this.showTimer = null
      this.hideTimer = null
    }
  },
  mounted () {
    const { on, show, hide, toggle, mode, clearTimers } = this

    this.$nextTick(() => {

      if (mode.match(/click/)) {
        on(this.$refs.target, pointerDown, toggle)
      }

      if (mode.match(/hover/)) {
        on(this.$refs.target, pointerEnter, show)
        on(this.$refs.target, pointerLeave, hide)
        on(this.$el, pointerLeave, hide)
        on(this.$el, pointerEnter, clearTimers)
      }

    })
  }
}
