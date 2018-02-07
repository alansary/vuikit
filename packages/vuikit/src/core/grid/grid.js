import mergeData from 'vuikit/src/util/vue-data-merge'
import { toggleClass } from 'vuikit/src/util/class'

export default {
  functional: true,
  props: {
    margin: {
      type: String,
      default: 'uk-grid-margin'
    },
    firstColumn: {
      type: String,
      default: 'uk-first-column'
    },
    clsStack: {
      type: String,
      default: 'uk-grid-stack'
    },
    divided: {
      type: Boolean,
      default: false
    },
    matched: {
      type: Boolean,
      default: false
    },
    gutter: {
      type: String,
      validator: val => !val || val.match(/^(small|medium|large|collapse)$/)
    }
  },
  render (h, { props, data, children }) {
    const { gutter, divided, matched, margin, firstColumn, clsStack } = props

    return h('div', mergeData(data, {
      class: ['uk-grid', {
        'uk-grid-match': matched,
        'uk-grid-divider': divided,
        [`uk-grid-${gutter}`]: gutter
      }],
      directives: [{
        name: 'vk-margin',
        value: {
          margin,
          firstColumn,
          onUpdate: (el, { stacks }) => {
            toggleClass(el, clsStack, stacks)
          }
        }
      }]
    }), children)
  }
}
