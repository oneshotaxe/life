module.exports = ({ socket, mongoose }) => {
  const Building = mongoose.models.Building
  setInterval(async () => {
    const docs = await Building.find({})

    socket.emit('add', docs.reduce((p, c) => p + c.cost, 0))
  }, 1000)

}