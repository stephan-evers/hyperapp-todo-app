
import { h } from 'hyperapp'

export default ({ item, toggle, destroy }) => (
  <li
    class={item.completed && "completed"}
    id={item.id}
    key={item.id}
    onclick={e => toggle(item.id)}
  >
    <input type="checkbox" checked={item.completed}/>

    <span class="value">
      {item.value}
    </span>

    <a onclick={e => destroy(item.id)}>
      delete me
    </a>
  </li>
)
