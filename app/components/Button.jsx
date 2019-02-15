
import { h } from 'hyperapp'

function getClasses (type, size, visibility = true) {
  let cls = 'btn'
  if (!visibility) cls += ' hidden'
  if (type) cls += ` ${type}`
  if (size) cls += ` size--${size}`
  return cls
}

export default ({ click, visibility, type, size }, children) => (
  <button
    class={getClasses(type, size, visibility)}
    onclick={click}
  >
    {children}
  </button>
)
