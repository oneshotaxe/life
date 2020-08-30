const express = require('express')

module.exports = () => {
  const router = express.Router()

  router.get('/', async (req, res) => {
    const mongoose = res.app.get('mongoose')
    const docs = await mongoose.models.Building.find({})
    res.json(docs)
  })

  router.post('/', async (req, res) => {
    const mogoose = res.app.get('mongoose')
    await mogoose.models.Building.insertMany(req.body)
    res.json({ status: 'Ok' })
  })

  router.delete('/:id', async (req, res) => {
    const mogoose = res.app.get('mongoose')
    await mogoose.models.Building.deleteOne({ _id: req.params.id })
    res.json({ status: 'Ok' })
  })

  return router
} 