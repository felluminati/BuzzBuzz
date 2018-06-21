import io from 'socket.io-client'
import store, {addNewPlayer} from './store'
const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('new-player', (name) => {
  store.dispatch(addNewPlayer(name))
  console.log(name, ' joined the game')
})

export default socket
