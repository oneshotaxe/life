module.exports = ({ socket, mongoose }) => {
  
  setInterval(() => {
    socket.emit('handshake', !!mongoose)
  }, 1000)

}