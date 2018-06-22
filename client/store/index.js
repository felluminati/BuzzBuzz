import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import room from './game-room'
import players from './players'
import currentPlayer from './current-player'
import responses from './responses'

const reducer = combineReducers({user, room, players, currentPlayer, responses})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './game-room'
export * from './players'
export * from './current-player'
export * from './responses'
