import { dbConnect, disconnect } from '../dao'
import { insertNewSubscription } from '../queries/insertSubscription.query'
import { removeSubscription } from '../queries/removeSubscription.query'
import { validSubscription } from '../../utilities/utils'

/**
 * @function subscribe Connects to database and posts a new subscription with name and number data
 *
 * @param subscriber {object} Data about subscription from request { name: <string>, number: <string> }
 *
 * @returns {bool} Returns true if insert succeeeds
 */

const subscribe = async (subscriber) => {
  await dbConnect().catch(e => { throw new Error(e) })

  if (!validSubscription(subscriber)) throw new Error(400)

  let subscribed = insertNewSubscription(subscriber)
  try {
    subscribed = await subscribed.save()
    disconnect();
  } catch (err) {
    throw new Error(500)
  }
  return { id: subscribed.id }
}

/**
 * @function unsubscribe Connects to database and removes a subscription with name and number data
 *
 * @param subscriber {object} Data about subscription from request { name: <string>, number: <string> }
 *
 * @returns {bool} Returns true if insert succeeeds
 */

const unsubscribe = async (subscriber) => {
  await dbConnect().catch(e => { throw new Error(e) })

  if (!validSubscription(subscriber)) throw new Error(400)

  let subscribed = removeSubscription(subscriber)
  try {
    subscribed = await subscribed.save()
    disconnect()
  } catch (err) {
    throw new Error(500)
  }
  return { id: subscribed.id }
}

module.exports = {
  subscribe,
  unsubscribe
}
