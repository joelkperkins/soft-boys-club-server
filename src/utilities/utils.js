import moment from 'moment'

/**
 * @function generateTimeStamp30DaysAgo generates a timestamp 30 days before cthe current time using the library "moment"
 *
 * @returns {object} Returns timestamp <YYYY-MM-DDT0000:00:00Z>
 */

const generateTimeStamp30DaysAgo = () => moment().subtract(30, 'days').format().slice(0, 10)

/**
 * @function validateMessageBody validates all key/value pairs are present before attempting to write a new message to file
 *
 * @returns {boolean} Returns true if body is valid
 */

const validMessageBody = (messageBody) => {
  if (!messageBody) return false
  if (!messageBody.to || !messageBody.from || !messageBody.message) return false
  if (Object.keys(messageBody).find(key => typeof messageBody[key] !== 'string')) return false
  return true
}

const validReaction = (reaction) => {
  return (reaction === 'like' || reaction === 'dislike')
}

const validMessageId = (messageId) => {
  return (typeof messageId === 'string')
}

module.exports = {
  generateTimeStamp30DaysAgo,
  validMessageBody,
  validReaction,
  validMessageId
}
