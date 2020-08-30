module.exports = (mongoose) => {
  mongoose.model('User', {
    username: String,
    email: String,
    password: String
  })
}