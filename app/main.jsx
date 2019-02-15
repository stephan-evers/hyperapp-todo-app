
import { h, app } from 'hyperapp'
import { location } from '@hyperapp/router'
import { State, Actions } from '~/store'
import Router from '~/router'

const View = (state, actions) => (<Router/>)
const main = app(State, Actions, View, document.body)
const unsubscribe = location.subscribe(main.location)
