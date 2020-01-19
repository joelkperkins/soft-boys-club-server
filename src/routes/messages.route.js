import { Router } from 'express'

// import the message controller methods
import { queryForAllMessages, queryForConversation } from '../dao/controllers/messages.controller'

// set up the express router
const messages = Router()

/**
 * @apiRoute get '/messages' Gets all messages sent by users within 100 days, limited to 100
 *
 * @apiSuccess {Array} Array of messages
 */

messages.get('/', async (req, res) => {
  let messageArray
  try {
    messageArray = await queryForAllMessages()
  } catch (err) {
    return res.status(400).send(err)
  }
  return res.status(200).json(messageArray)
})

/**
 * @apiRoute get '/messages/between' Gets all messages sent between two users within 100 days, limited to 100
 *
 * @apiQueryParam {string} to - user who recieved the message
 *
 * @apiQueryParam {string} from - user who sent the message
 *
 * @apiSuccess {Array} Array of message objects
 */

messages.get('/between', async (req, res) => {
  let messageArray
  try {
    messageArray = await queryForConversation(req.query.to, req.query.from)
  } catch (err) {
    return res.status(400).send(err)
  }
  return res.status(200).json(messageArray)
})

module.exports = { messages }
