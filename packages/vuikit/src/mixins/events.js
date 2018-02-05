import { on, off } from 'vuikit/src/util/event'

// A mixin that maps on/off events methods saving the
// off reference for a cleanup on destroy
export default {
  methods: {
    on (...args) {
      this._events.push(on(...args))
    },
    off (...args) {
      off(...args)
    }
  },
  created () {
    this._events = []
  },
  beforeDestroy () {
    this._events.forEach(off => off())
  }
}
