import dataMerge from 'vuikit/src/util/vue-data-merge'
import { once } from 'vuikit/src/util/event'
import { addClass, removeClass } from 'vuikit/src/util/class'

const doc = document.documentElement

export default {
  functional: true,
  render (h, { data, children }) {

    const def = {
      props: {
        css: false,
        appear: true
      },
      on: {
        beforeEnter () {
          addClass(doc, 'uk-modal-page')
        },
        enter (el, done) {
          // redraw workaround, necessary so the browser
          // doesn't try to apply it all in one step, not
          // giving enough time for the transition to init
          el.offsetWidth // eslint-disable-line

          once(el, 'transitionend', done, false, e => e.target === el)

          // fix for appear transition,
          // force it to be executed right after
          setTimeout(() => addClass(el, 'uk-open'), 0)
        },
        beforeLeave (el) {
          removeClass(el, 'uk-open')
        },
        leave (el, done) {
          once(el, 'transitionend', done, false, e => e.target === el)
        },
        afterLeave () {
          removeClass(doc, 'uk-modal-page')
        }
      }
    }

    return h('transition', dataMerge(data, def), children)
  }
}
