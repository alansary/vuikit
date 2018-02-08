import { $$ } from 'vuikit/src/util/core'
import { on } from 'vuikit/src/util/event'
import { css } from 'vuikit/src/util/style'
import { attr } from 'vuikit/src/util/attr'
import { isVisible } from 'vuikit/src/util/filter'
import { isUndefined, merge } from 'vuikit/src/util/lang'

export default {
  bind (el, binding) {
    el.vkHeightMatchOff = on(window, 'resize', () => update(el, binding))
  },
  inserted (el, binding, vnode) {
    vnode.context.$nextTick(() => update(el, binding))
  },
  componentUpdated (el, binding) {
    update(el, binding)
  },
  unbind (el) {
    el.vkHeightMatchOff()
  }
}

function update (el, binding) {
  const opts = merge({
    target: '> *',
    row: true
  }, (binding.value || {}))

  let elements = $$(opts.target, el)

  css(elements, 'minHeight', '')

  // get rows that should be adjusted
  const rows = getRows(elements, opts.row)

  // apply height
  rows.forEach(els => {
    const { height, elements } = match(els)
    css(elements, 'minHeight', height)
  })
}

function getRows (elements, row) {
  if (!row) {
    return [ elements ]
  }

  let lastOffset = false

  return elements.reduce((rows, el) => {

    if (lastOffset !== el.offsetTop) {
      rows.push([el])
    } else {
      rows[rows.length - 1].push(el)
    }

    lastOffset = el.offsetTop

    return rows

  }, [])
}

function match (elements) {
  if (elements.length < 2) {
    return {}
  }

  let max = 0
  const heights = []

  elements.forEach(el => {
    let style
    let hidden

    if (!isVisible(el)) {
      style = attr(el, 'style')
      hidden = attr(el, 'hidden')

      attr(el, {
        style: `${style || ''};display:block !important;`,
        hidden: null
      })
    }

    max = Math.max(max, el.offsetHeight)
    heights.push(el.offsetHeight)

    if (!isUndefined(style)) {
      attr(el, {style, hidden})
    }
  })

  elements = elements.filter((el, i) => heights[i] < max)

  return { height: max, elements }
}
