import { on } from 'vuikit/src/util/event'
import { merge, noop } from 'vuikit/src/util/lang'
import { toggleClass } from 'vuikit/src/util/class'
import { isRtl, isVisible } from 'vuikit/src/util/dom'

export default {
  bind (el, binding) {
    el.vkMarginOff = on(window, 'resize', () => update(el, binding))
  },
  inserted (el, binding, vnode) {
    vnode.context.$nextTick(() => update(el, binding))
  },
  componentUpdated (el, binding) {
    update(el, binding)
  },
  unbind (el) {
    el.vkMarginOff()
  }
}

function update (el, binding) {
  const opts = merge({
    onUpdate: noop,
    margin: 'uk-margin-small-top',
    firstColumn: 'uk-first-column'
  }, (binding.value || {}))

  const items = el.children

  if (!items.length || !isVisible(el)) {
    return
  }

  const data = getRows(items)

  data.rows.forEach((row, i) =>
    row.forEach((el, j) => {
      toggleClass(el, opts.margin, i !== 0)
      toggleClass(el, opts.firstColumn, j === 0)
    })
  )

  opts.onUpdate(el, data)
}

function getRows (items) {
  const data = {}
  const rows = [[]]

  data.stacks = true

  for (var i = 0; i < items.length; i++) {
    const el = items[i]
    const dim = el.getBoundingClientRect()

    if (!dim.height) {
      continue
    }

    for (var j = rows.length - 1; j >= 0; j--) {
      const row = rows[j]

      if (!row[0]) {
        row.push(el)
        break
      }

      var leftDim = row[0].getBoundingClientRect()

      if (dim.top >= Math.floor(leftDim.bottom)) {
        rows.push([el])
        break
      }

      if (Math.floor(dim.bottom) > leftDim.top) {
        data.stacks = false

        if (dim.left < leftDim.left && !isRtl()) {
          row.unshift(el)
          break
        }

        row.push(el)
        break
      }

      if (j === 0) {
        rows.unshift([el])
        break
      }
    }
  }

  data.rows = rows

  return data
}
