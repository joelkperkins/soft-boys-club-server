import { Router } from 'express'

// import the chat controller method
import { sendMessage, reactMessage } from '../dao/controllers/chat.controller'

// set up the express router
const chat = Router()

/**
 * @apiRoute POST '/send' Send a chat message to another user
 *
 * @apiBody {object} { user_id: {string}, recipient_id: {string}, message: {string} } Object containing from, to, and message body.
 *
 * @apiSuccess {String} Confirmation of sent message, returns ID of message
 */

chat.post('/', async (req, res) => {
  let messageSentConfirmation
  try {
    messageSentConfirmation = await sendMessage(req.body)
  } catch (err) {
    const errorCode = parseInt(err.message)
    return res.status(errorCode).json(err.message)
  }
  res.status(200).send(messageSentConfirmation)
})

/**
 * @apiRoute PUT '/react' User reacts to a message they received
 *
 * @apiBody {object} { messageId: <string>, reaction: <string>} Object containing id of message
 *
 * @apiSuccess {String} Number of updated messages
 */
chat.put('/react', async (req, res) => {
  try {
    await reactMessage(req.body.messageId, req.body.reaction)
  } catch (err) {
    const errorCode = parseInt(err.message)
    return res.status(errorCode).json(err.message)
  }
  res.status(204).send('OK')
})

module.exports = { chat }
