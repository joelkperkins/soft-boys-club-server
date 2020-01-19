import config from '../../config'
import mongoose from 'mongoose'
import messageSchema from './schemas/message.schema'

const DB_URI = config.db
const COLLECTION = config.chatroom

module.exports = {
  dbConnect: () => mongoose.connect(DB_URI, { useNewUrlParser: true }),
  disconnect: () => mongoose.disconnect(),
  Message: mongoose.model(COLLECTION, messageSchema)
}
