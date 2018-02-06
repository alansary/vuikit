/*
 * Returns the closest parent matching the tag
 */
export function findClosestParent (instance, tag) {
  return findClosestParents(instance, tag).pop()
}

/*
 * Returns the closest parents matching the tag
 */
export function findClosestParents (instance, tag) {
  const parents = []
  tag = tag || instance.$options._componentTag

  let parent = instance.$parent

  while (parent) {
    if (parent.$options._componentTag === tag) {
      parents.unshift(parent)
    }

    parent = parent.$parent
  }

  return parents
}
