import { Message } from '../dao'

/**
 * @function insertNewMessage generates new model for a message from the imported mongoose schema
 *
 * @param messageData {object} Data about message from request { to: <string>, from: <string>, message: <string> }
 *
 * @returns {object} Returns mongoose model for a message
 */

const insertNewMessage = messageData => new Message(messageData)

module.exports = { insertNewMessage }
