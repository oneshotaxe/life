const express = require('express')

module.exports = () => {
  const router = express.Router()

  router.use('/buildings', require('./routes/buildings')())
  router.use('/auth', require('./routes/auth')())

  return router
} 