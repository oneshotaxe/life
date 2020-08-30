const express = require('express')
const jwt = require('express-jwt')
const createJwt = require('jsonwebtoken').sign

module.exports = () => {
  const router = express.Router()

  router.post('/registration', async (req, res) => {
    const form = req.body

    const mongoose = res.app.get('mongoose')
    const User = mongoose.models.User
    const user = new User(form)
    await user.save()

    res.json(user)
  })

  router.post('/login', async (req, res) => {
    const form = req.body
    const mongoose = res.app.get('mongoose')
    const User = mongoose.models.User
    const user = await User.findOne({ username: form.username })
    if (user && user.password == form.password) {
      res.json({ token: createJwt({ username: user.username, email: user.email }, 'secret') })
    } else {
      res.status(500).send()
    }
  })

  router.post('/logout', async (req, res) => {
    res.json({ status: 'Ok' })
  })

  router.get('/user', jwt({ secret: 'secret', algorithms: ['HS256'] }), async (req, res) => {
    res.json({ user: req.user })
  })

  return router
} 