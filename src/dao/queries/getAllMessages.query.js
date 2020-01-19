import { Message } from '../dao'
import { generateTimeStamp30DaysAgo } from '../../utilities/utils'
import keys from './responseKeys.query'

/**
 * @function getAllMessagesQuery generates a query for all messages sent within 30 days, limited to 100
 *
 * @returns {object} Returns mongoose query for the messages
 */

const getAllMessagesQuery = async () => Message
  .find({}, keys)
  .where('createdAt')
  .gte(generateTimeStamp30DaysAgo())
  .limit(100)

module.exports = { getAllMessagesQuery }
