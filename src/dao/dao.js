import config from '../../config'
import mongoose from 'mongoose'
import subscriptionSchema from './schemas/subscription.schema'

const DB_URI = config.db
const COLLECTION = config.collection

module.exports = {
  dbConnect: () => mongoose.connect(DB_URI, { useNewUrlParser: true }),
  disconnect: () => mongoose.disconnect(),
  Subscription: mongoose.model(COLLECTION, subscriptionSchema)
}
