module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('create', (name) => {
      console.log('backkkk', name)
      socket.join(name)
    })

    socket.on('join', (room, name) => {
      console.log('backkkk', name)
      socket.join(room)
      socket.broadcast.to(room).emit('new-player', name)
    })

    socket.on('buzz', (name, room) => {
      console.log('yo', name)
      socket.broadcast.to(room).emit('buzz-recieved', name)
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
