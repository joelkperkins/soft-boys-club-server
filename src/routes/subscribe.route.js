import { Router } from 'express'

// import the chat controller method
import { subscribe, unsubscribe } from '../dao/controllers/subscription.controller'

// set up the express router
const subscription = Router()

/**
 * @apiRoute POST '/subscribe' subscribes to alerts from sbc
 *
 * @apiBody {object} { name: {string}, number: {string} }
 *
 * @apiSuccess {String} Confirmation of subscription
 */

subscription.post('/', async (req, res) => {
  let subscriber = req.body
  try {
    subscriber = await subscribe(subscriber)
  } catch (err) {
    const errorCode = parseInt(err.message)
    return res.status(errorCode).json(err.message)
  }
  res.status(200).send(subscriber)
})

/**
 * @apiRoute DELETE '/subscribe' remove user from subscription list
 *
 * @apiBody {object} { name: <string>, numbver: <string>}
 *
 * @apiSuccess {String} 200
 */
subscription.delete('/', async (req, res) => {
  const subscriber = req.body
  try {
    await unsubscribe(subscriber)
  } catch (err) {
    const errorCode = parseInt(err.message)
    return res.status(errorCode).json(err.message)
  }
  res.status(204).send('OK')
})

module.exports = { subscription }
