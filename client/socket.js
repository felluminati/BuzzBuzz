import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('test-back', (test) => {
  console.log('roooom', test)
})

socket.on('new-player', (name) => {
  console.log(name, ' joined the game')
})

export default socket
