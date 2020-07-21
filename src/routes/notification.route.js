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

notification.get('/', async (req, res) => {
  let subscriberArray

  const twilio = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  try {
    subscriberArray = await queryForAllSubscribers()
    subscriberArray.forEach(sub => {
      twilio.messages
        .create({
          body: `Hi ${sub.name}! We love you and wanted to let you know that ${req.body.name} is streaming live! Tune in at www.softboys.club`,
          messagingServiceSid: 'MG9752274e9e519418a7406176694466fa',
          to: sub.number
        })
        .then(message => console.log(message.sid))
    })
  } catch (err) {
    return res.status(400).send(err)
  }
  return res.status(200).json(subscriberArray)
})

module.exports = { notification }
