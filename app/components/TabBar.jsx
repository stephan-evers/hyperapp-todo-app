
import { h } from 'hyperapp'

export default ({ visibility }) => (state, actions) => (
  <ol class={!state.items.length && 'hidden'}>
    <li class={state.filter === 'all' && 'active'} onclick={actions.showAllItems}>
      All
    </li>
    <li class={state.filter === 'open' && 'active'} onclick={actions.showOpenItems}>
      Open
    </li>
    <li class={state.filter === 'completed' && 'active'} onclick={actions.showCompletedItems}>
      Completed
    </li>
  </ol>
)
