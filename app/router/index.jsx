
import { h } from 'hyperapp'
import { Route, Switch } from '@hyperapp/router'

import Home from '~/pages/Home'
import About from '~/pages/About'

const Router = () => (
  <Switch>
    <Route path="/about" render={ About } />
    <Route path="/" render={ Home } />
    <Route render={ Home } />
  </Switch>
)

export default Router
