import app from './index'
import config from '../config'

const PORT = config.port || 9000

const server = app.listen(PORT, () => {
  console.log(`SBC Server Running on Port ${PORT}`)
})

module.exports = server
