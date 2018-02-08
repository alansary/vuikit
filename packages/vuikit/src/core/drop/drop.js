import VkTransition from 'vuikit/src/core/transition'
import mergeData from 'vuikit/src/util/vue-data-merge'
import { css } from 'vuikit/src/util/style'
import { isRtl } from 'vuikit/src/util/env'
import { assign } from 'vuikit/src/util/lang'
import { offset } from 'vuikit/src/util/dimensions'
import { addClass, removeClass } from 'vuikit/src/util/class'

export default {
  functional: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    target: {
      // type Dom Element
    },
    boundary: {
      default: () => window
    },
    boundaryAlign: {
      type: Boolean,
      default: false
    },
    flip: {
      type: [String, Boolean],
      default: true
    },
    position: {
      type: String,
      default: `bottom-${isRtl ? 'right' : 'left'}`,
      validator: pos =>
        pos.match(/(top|bottom)-(left|right|center|justify)/) ||
        pos.match(/(left|right)-(top|bottom|center|justify)/)
    },
    offset: {
      type: [Boolean, Number],
      default: false
    },
    animation: {
      type: String,
      default: 'fade'
    },
    duration: {
      type: Number,
      default: 200
    },
    clsDrop: {
      type: String,
      default: 'uk-drop'
    }
  },
  render (h, { children, data, props }) {
    let { position, target } = props
    const { boundary, boundaryAlign } = props

    if (!position || !target) {
      return
    }

    // set final target
    target = boundaryAlign ? boundary : target

    const [, align] = position.split('-')
    const alignTo = offset(boundaryAlign ? boundary : target)

    // justify is a drop specific position,
    // it must be maped for v-position
    position = position.replace('justify', 'center')

    const drop = h('div', mergeData(data, {
      class: [props.clsDrop, {
        [`${props.clsDrop}-boundary`]: props.boundaryAlign
      }],
      style: {
        display: 'block'
      },
      directives: [
        {
          name: 'vk-position',
          value: assign({}, props, {
            target,
            position,
            clsPos: props.clsDrop,
            beforePosition: el => {
              const boundaryOffset = offset(boundary)

              css(el, { width: '', height: '' })
              removeClass(el, `${props.clsDrop}-stack`)

              if (align === 'justify') {
                const prop = getAxis(position) === 'y' ? 'width' : 'height'
                css(el, prop, alignTo[prop])
              } else if (el.offsetWidth > Math.max(boundaryOffset.right - alignTo.left, alignTo.right - boundaryOffset.left)) {
                addClass(el, `${props.clsDrop}-stack`)
              }
            }
          })
        },
        {
          name: 'show',
          value: props.show
        }
      ]
    }), children)

    return h(VkTransition, {
      props: {
        name: [props.animation],
        duration: props.duration
      }
    }, [ drop ])
  }
}

function getAxis (position) {
  const [dir] = position.split('-')
  return dir === 'top' || dir === 'bottom'
    ? 'y'
    : 'x'
}
