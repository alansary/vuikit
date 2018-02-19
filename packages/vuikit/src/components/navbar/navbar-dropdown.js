import VkDrop from '../drop/drop'
import { Grid as VkGrid } from '../'

import { get } from 'vuikit/src/util/lang'
import { query } from 'vuikit/src/util/selector'
import { isRtl, pointerEnter, pointerLeave, pointerDown } from 'vuikit/src/util/env'

export default {
  name: 'NavbarDropdown',
  props: {
    title: {
      type: String,
      required: true
    },
    justified: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: isRtl ? 'right' : 'left',
      validator: val => val.match(/^(left|center|right)$/)
    },
    navbarAligned: {
      type: Boolean,
      default: false
    },
    mode: VkDrop.props.mode,
    offset: VkDrop.props.offset,
    animation: VkDrop.props.animation,
    duration: VkDrop.props.duration,
    delayShow: VkDrop.props.delayShow,
    delayHide: VkDrop.props.delayHide
  },
  computed: {
    navbar () {
      return query('!.uk-navbar', this.$el)
    },
    dropbar () {
      return get(this, '$parent.$options.name', '').match('NavbarDropbar')
        ? this.$parent
        : false
    }
  },
  mounted () {
    const { mode } = this
    const { on, toggle, show, hide } = this.$refs.drop
    const target = this.$refs.drop.$refs.target

    if (mode.match(/click/)) {
      on(target, pointerDown, toggle)
    }

    if (mode.match(/hover/)) {
      on(target, pointerEnter, show)

      if (this.dropbar) {
        on(this.dropbar.$el, pointerLeave, hide)
      } else {
        on(target, pointerLeave, hide)
      }
    }

  },
  render (h) {
    const { title, justified, mode, align, navbarAligned } = this
    const childrenNodes = this.$slots.default.filter(n => n.tag)
    const colCount = childrenNodes.length

    const grid = () => h(VkGrid, {
      class: [
        'uk-navbar-dropdown-grid',
        `uk-child-width-1-${colCount}${colCount > 2 ? '@m' : ''}`
      ]
    }, childrenNodes.map(child =>
      h('div', [ child ])
    ))

    return h('li', [
      h('a', title),
      h(VkDrop, {
        nativeOn: {
          [pointerEnter]: e => {
            this.$refs.drop.clearTimers()

            if (mode.match(/hover/)) {
              this.$refs.drop.show()
            }
          },
          [pointerLeave]: e => {
            if (!this.dropbar && mode.match(/hover/)) {
              this.$refs.drop.hide()
            }
          }
        },
        ref: 'drop',
        class: {
          'uk-navbar-dropdown-dropbar': this.dropbar,
          'uk-navbar-dropdown-boundary': justified || navbarAligned,
          [`uk-navbar-dropdown-width-${colCount}`]: !justified
        },
        props: {
          // mode is nulled for full
          // show/hide controll
          mode: '',
          offset: 0,
          position: justified
            ? 'bottom-justify'
            : `bottom-${align}`,
          mainClass: 'uk-navbar-dropdown',
          flip: justified ? 'x' : undefined,
          boundary: justified || navbarAligned
            ? '!nav' // closest nav
            : undefined,
          boundaryAlign: justified || navbarAligned
        }
      }, [
        colCount >= 2
          ? grid()
          : childrenNodes
      ])
    ])
  }
}
