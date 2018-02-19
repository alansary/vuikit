import VkDrop, { active as activeDrop } from '../drop/drop'
import { Grid as VkGrid } from '../'
import { query } from 'vuikit/src/util/selector'
import { isRtl } from 'vuikit/src/util/env'
import { isVisible, within } from 'vuikit/src/util/filter'
import { noop, toFloat, includes } from 'vuikit/src/util/lang'

export default {
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
    delayHide: VkDrop.props.delayHide,
    dropbar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    navbar () {
      return query('!.uk-navbar', this.$el)
    }
  },
  render (h) {
    const { title, justified, mode, align, navbarAligned, dropbar } = this
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
      h('a', {
        on: {
          click: e => {
            // drop el is not available immediately,
            // we must wait for it
            this.$nextTick(() => setTimeout(() => {
              this.transitionDropbar()
            }, 1))
          }
        }
      }, title),
      h(VkDrop, {
        ref: 'drop',
        class: {
          'uk-navbar-dropdown-boundary': justified || navbarAligned,
          [`uk-navbar-dropdown-width-${colCount}`]: !justified
        },
        props: {
          mode,
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
        },
        on: {
          hide: () => {
            const active = this.getActiveDrop()

            if (!active || (active && active.$el === this.$refs.drop.$el)) {
              this.transitionTo(0)
            }
          }
        }
      }, [
        colCount >= 2
          ? grid()
          : childrenNodes
      ])
    ])
  },
  methods: {
    getActiveDrop () {
      const active = activeDrop
      return active && includes(active.mode, 'hover') && within(active.$refs.target, this.dropbar) && active
    },

  }
}
