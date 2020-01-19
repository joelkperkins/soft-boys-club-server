import { Message } from '../dao'
import { generateTimeStamp30DaysAgo } from '../../utilities/utils'
import keys from './responseKeys.query'

/**
 * @function getConversation generates a query for all messages sent between users within 30 days, limited to 100
 *
 * @param to {string} user to recieve the message
 *
 * @param from {string} user to send the message
 *
 * @returns {object} Returns mongoose query for the messages between requested
 */

const getConversation = async (to, from) => Message
  .find({ from: from, to: to }, keys)
  .where('createdAt')
  .gte(generateTimeStamp30DaysAgo())
  .limit(100)

module.exports = { getConversation }
