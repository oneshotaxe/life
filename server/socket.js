const Io = require('socket.io')

module.exports = (server) => {
  const io = Io(server)

  io.on('connection', (socket) => {
    
  })
  
  return io
}
