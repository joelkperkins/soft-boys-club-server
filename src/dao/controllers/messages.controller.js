import { dbConnect, disconnect } from '../dao'
import { getAllMessagesQuery } from '../queries/getAllMessages.query'
import { getConversation } from '../queries/getConversation.query'

/**
 * @function queryForAllMessages Connect to database, query for all messages in database sent within 30 days, limited to 100 messages, then close database
 *
 * @param none
 *
 * @returns {object[]} Returns an array of message objects [ { to: <string>, from: <string>, message: <string>, createdAt: <timestamp>}]
 */

const queryForAllMessages = async () => {
  await dbConnect().catch(e => { throw new Error(e) })
  return getAllMessagesQuery().then((messages, err) => {
    if (err) throw new Error(err)
    disconnect()
    return messages
  })
}

/**
 * @function queryForConversation Connect to database, query for all messages between two users within 30 days, limited to 100, then close database
 *
 * @param to {string} user whom the message was sent to
 *
 * @param from {string} user whom the message was sent by
 *
 * @returns {object[]} Returns an array of message objects [ { to: <string>, from: <string>, message: <string>, createdAt: <timestamp>}]
 */

const queryForConversation = async (to, from) => {
  await dbConnect().catch(e => { throw new Error(e) })
  return getConversation(to, from).then((messages, err) => {
    if (err) throw new Error(err)
    disconnect()
    return messages
  })
}

module.exports = {
  queryForAllMessages,
  queryForConversation
}
