module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('create', (name) => {
      socket.join(name)
    })

    socket.on('join', (room, name) => {
      socket.join(room)
      socket.broadcast.to(room).emit('new-player', name)
    })

    socket.on('buzz', (name, room) => {
      socket.broadcast.to(room).emit('buzz-recieved', name)
    })

    socket.on('activate', (room) => {
      socket.broadcast.to(room).emit('activate-buzz')
    })

    socket.on('deactivate', (room) => {
      socket.broadcast.to(room).emit('deactivate-buzz')
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
