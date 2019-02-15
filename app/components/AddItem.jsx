
import { h } from 'hyperapp'
import Button from '~/components/Button'


function onKeyUp (e) {
  switch (e.keyCode) {
    case 13: this.add(e); break
    case 27: e.target.blur(); break
  }
}

const AddItem = ({ value, input, add }) => (
  <div class="fieldset input">
    <label class={value && "active"}>Add your task</label>
    <input class="size--large" type="text" value={value}
      placeholder="Add your task"
      onkeyup={onKeyUp.bind({add})}
      oninput={e => input(e.target.value)}
    />

    <Button click={add} type="submit" size="large">Add</Button>
  </div>
)

export default AddItem
