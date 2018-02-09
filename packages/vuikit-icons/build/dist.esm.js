import * as Icons from '../lib/_import.js'

export * from '../lib/_import.js'

const VuikitIcons = {
  install (Vue) {
    each(Icons, (def, name) => {
      Vue.component(name, def)
    })
  }
}

export default VuikitIcons

export function each (obj, cb) {
  for (var key in obj) {
    if (cb.call(obj[key], obj[key], key) === false) {
      break
    }
  }
}
