import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import room from './game-room'
import players from './players'
import currentPlayer from './current-player'
import responses from './responses'
import buzzer from './buzzer'

const reducer = combineReducers({ room, players, currentPlayer, responses, buzzer})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './game-room'
export * from './players'
export * from './current-player'
export * from './responses'
export * from './buzzer'
