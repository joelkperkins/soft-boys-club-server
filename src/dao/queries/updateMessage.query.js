import { Message } from '../dao'

/**
 * @function getUpdateMessageQuery generates a query to update a message
 *
 * @param {string} messageId ID of message to update
 *
 * @param {string} reaction string representing reaction: 'like', 'dislike'
 *
 * @returns {object} Returns mongoose query to update the message
 */

const updateMessage = async (messageId, reaction) => Message
  .updateOne({ _id: messageId }, { reaction: reaction })

module.exports = { updateMessage }
