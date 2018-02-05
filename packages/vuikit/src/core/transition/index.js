import { isString } from 'vuikit/src/util/lang'
import { Animation } from 'vuikit/src/util/dom'

export default {
  functional: true,
  props: {
    name: {
      type: [String, Array],
      required: true
    },
    duration: {
      type: Number
    }
  },
  render (h, { props, data, children }) {
    const { name, duration } = props

    const [animationIn, animationOut] = isString(name) ? [name, name] : name

    const def = {
      props: {
        css: false
      },
      on: {
        enter (el, done) {
          animationIn
            ? Animation.in(el, `uk-animation-${animationIn}`, duration).then(done)
            : done()
        },
        leave (el, done) {
          animationOut
            ? Animation.out(el, `uk-animation-${animationOut}`, duration).then(done)
            : done()
        }
      }
    }

    return h('transition', def, children)
  }
}
