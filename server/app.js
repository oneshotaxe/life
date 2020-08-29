const http = require('http')
const app = require('express')()

const server = http.createServer(app)
const socket = require('./socket')(server)

const mongoose = require('./mongoose')()

require('./workers')({ socket, mongoose })

app.get('/api', (req, res) => {
  res.json({ status: 'Ok!' })
})

module.exports = { app, server }
