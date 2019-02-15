
import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

import AddItem from '~/components/AddItem'
import ListItem from '~/components/ListItem'
import Button from '~/components/Button'
import TabBar from '~/components/TabBar'

function getOpenItems (state) {
  return state.items.filter(item => !item.completed)
}

function getCompletedItems (state) {
  return state.items.filter(item => item.completed)
}

function getItems (state) {
  switch (state.filter) {
    case 'completed':
      return getCompletedItems(state);
    case 'open':
      return getOpenItems(state);
    case 'all':
    default:
      return state.items
  }
}

const Home = () => (state, actions) => (
  <div>
    <header>
      <h1>ToDo List</h1>
    </header>

    <main>
      <AddItem value={state.input} input={actions.input} add={actions.add}/>
      <TabBar visibility={state.items.length} />

      <ul>
        { getItems(state).map(item => (
          <ListItem item={item} toggle={actions.toggle} destroy={actions.destroy} />
        ))}
      </ul>
    </main>

    <footer>
      <Button
        visibility={state.items.filter(item => item.completed).length && state.filter !== 'open'}
        click={actions.destroyAllCompleted}
        size="small"
      >
        <i>🗑️</i> Clear all completed
      </Button>
    </footer>
  </div>
)

export default Home
