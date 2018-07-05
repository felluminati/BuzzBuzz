import io from 'socket.io-client'
import store, {addNewPlayer, newResponse, activateBuzzer, deactivateBuzzer, removePlayer, updatePlayerScore} from './store'
const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('new-player', (name, id) => {
  store.dispatch(addNewPlayer(name, id))
  console.log(name, ' joined the game')
})

socket.on('buzz-recieved', (name) => {
  store.dispatch(newResponse(name))
})

socket.on('activate-buzz', () => {
  store.dispatch(activateBuzzer())
})

socket.on('deactivate-buzz', () => {
  store.dispatch(deactivateBuzzer())
})

socket.on('player-leave', (id) => {
  store.dispatch(removePlayer(id))
})

socket.on('update-score', (name, score) => {
  store.dispatch(updatePlayerScore(name, score))
})

export default socket
