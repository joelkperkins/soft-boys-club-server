import { Router } from 'express'
import Twilio from 'twilio'

// import the message controller methods
import { queryForAllSubscribers } from '../dao/controllers/notification.controller'

// set up the express router
const notification = Router()

/**
 * @apiRoute get '/notify' notifies all subscribers
 *
 * @apiSuccess 200
 */

notification.get('/', async (_, res) => {
  let subscriberArray
  let twilio
  try {
    console.log(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    const id = process.env.TWILIO_ACCOUNT_SID
    const key = process.env.TWILIO_AUTH_TOKEN
    twilio = new Twilio(id, key)
  } catch (err) {
    return res.status(500).json(err)
  }
  console.log(1)

  const send = (name, number) => {
    return twilio.messages
      .create({
        body: `Hi ${name}! We love you and wanted to let you know that SBC: Radio is streaming live! Tune in at www.softboys.club`,
        to: `+1${number}`,
        from: process.env.TWILIO_NUMBER
      })
      .then(message => console.log(message.sid))
  }

  try {
    subscriberArray = await queryForAllSubscribers()
    console.log(subscriberArray)
    subscriberArray.forEach(async sub => {
      if (sub.number && sub.name) {
        await send(sub.name, sub.number)
      }
    })
    return res.status(200).json(subscriberArray)
  } catch (err) {
    return res.status(400).json(err)
  }
})

module.exports = { notification }
