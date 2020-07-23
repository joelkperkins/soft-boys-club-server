import app from './index'

const PORT = process.env.PORT || 9000

const server = app.listen(PORT, () => {
  console.log(`SBC Server Running on Port ${PORT}`)
})

module.exports = server
