const http = require('http')
const Express = require('express')
const bodyParser = require('body-parser')

module.exports = async function () {
  // Настройка экземпляра Express
  const app = Express()
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  
  // Инициализация сокет-сервера
  const server = http.createServer(app)
  const socket = require('./socket')(server)
  
  // Инициализация базы данных
  const mongoose = await require('./mongoose')()
  app.set('mongoose', mongoose)
  app.use('/api', require('./api')())
  
  // Инициализация воркеров
  require('./workers')({ socket, mongoose })
  
  return { app, server }
}
