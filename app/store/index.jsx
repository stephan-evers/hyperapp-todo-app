
import { location } from '@hyperapp/router'

export const State = {
  location: location.state,
  items: [],
  input: '',
  filter: 'all'
}

export const Actions = {
  showAllItems: () => state => ({ filter: 'all' }),
  showOpenItems: () => state => ({ filter: 'open' }),
  showCompletedItems: () => state => ({ filter: 'completed' }),
  location: location.actions,
  input: value => ({ input: value }),
  add: e => state => {
    // if (state.input) e.target.blur()
    return state.input
      ? { input: '',
          items: state.items.concat({
            value: state.input,
            completed: false,
            id: Date.now()})}
      : {}
  },
  toggle: id => state => ({
    items: state.items.map(item => (id === item.id) ? Object.assign({}, item, { completed: !item.completed }) : item)
  }),
  destroyAllCompleted: () => state => ({ items: state.items.filter(item => !item.completed) }),
  destroy: id => state => ({ items: state.items.filter(item => item.id !== id) })
}
