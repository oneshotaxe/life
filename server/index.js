const port = process.env.PORT || 3000
const isProd = process.env.NODE_ENV === 'production'

const { app, server } = require('./app')

const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config.js')
config.dev = !isProd

const nuxt = new Nuxt(config)
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)

server.listen(port, 'localhost')
