import mongoose from 'mongoose'
import subscriptionSchema from './schemas/subscription.schema'
import dotenv from 'dotenv'
dotenv.config()

const DB_URI = process.env.DB
console.log(DB_URI)
const COLLECTION = process.env.COLLECTION

module.exports = {
  dbConnect: () => mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }),
  disconnect: () => mongoose.disconnect(),
  Subscription: mongoose.model(COLLECTION, subscriptionSchema)
}
