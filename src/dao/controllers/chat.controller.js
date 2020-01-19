import { dbConnect, disconnect } from '../dao'
import { insertNewMessage } from '../queries/insertNewMessage.query'
import { updateMessage } from '../queries/updateMessage.query'
import { validMessageBody, validReaction, validMessageId } from '../../utilities/utils'

/**
 * @function sendMessage Connects to database and posts a new message with to and from data
 *
 * @param messageData {object} Data about message from request { to: <string>, from: <string>, message: <string> }
 *
 * @returns {bool} Returns true if insert succeeeds
 */

const sendMessage = async (messageData) => {
  await dbConnect().catch(e => { throw new Error(e) })

  if (!validMessageBody(messageData)) throw new Error(400)

  let newMessage = insertNewMessage(messageData)
  try {
    newMessage = await newMessage.save()
    disconnect()
  } catch (err) {
    throw new Error(500)
  }
  return { id: newMessage.id }
}

/**
 * @function reactMessage Connects to database and updates a message with a reaction
 *
 * @param messageId {string} ID of message to react to { id: <string> }
 *
 * @param reaction {string} reaction : 'like', 'dislike'
 *
 * @returns {bool} Returns number of uodated documents
 */

const reactMessage = async (messageId, reaction) => {
  await dbConnect().catch(e => { throw new Error(e) })

  if (!validMessageId(messageId)) throw new Error(400)
  if (!validReaction(reaction)) throw new Error(400)

  let updated
  try {
    updated = await updateMessage(messageId, reaction)
    disconnect()
  } catch (err) {
    throw new Error(500)
  }
  return updated.n
}

module.exports = {
  sendMessage,
  reactMessage
}
