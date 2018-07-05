module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    let roomName = ""
    socket.on('create', (name) => {
      roomName = name;
      socket.join(roomName)
    })

    socket.on('join', (room, name) => {
      roomName = room
      socket.join(room)
      socket.broadcast.to(room).emit('new-player', name, socket.id)
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

    socket.on('update-score', (name, score) => {
      socket.broadcast.to(roomName).emit('update-score', name, score)
    })

    socket.on('disconnect', () => {
      socket.broadcast.to(roomName).emit('player-leave', socket.id)
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
