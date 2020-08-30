const mongoose = require('mongoose')

module.exports = async () => {
  const conn = await mongoose.createConnection('mongodb://localhost:27017/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )

  require('./models/building')(conn)
  require('./models/user')(conn)
  return conn
}
