import io from 'socket.io-client'
import store, {addNewPlayer, newResponse, activateBuzzer} from './store'
const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('new-player', (name) => {
  store.dispatch(addNewPlayer(name))
  console.log(name, ' joined the game')
})

socket.on('buzz-recieved', (name) => {
  store.dispatch(newResponse(name))
})

socket.on('activate-buzz', () => {
  store.dispatch(activateBuzzer())
  console.log('hi')
})

export default socket
