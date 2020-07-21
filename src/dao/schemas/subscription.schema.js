import mongoose from 'mongoose'

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
})

module.exports = subscriptionSchema
