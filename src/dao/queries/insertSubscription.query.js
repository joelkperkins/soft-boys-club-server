import { Subscription } from '../dao'

/**
 * @function insertNewSubscription generates new model for a subscription from the imported mongoose schema
 *
 * @param subscriber {object} Data about subscripton from request { name: <string>, number: <string> }
 *
 * @returns {object} Returns mongoose model for a subscriptions
 */

const insertNewSubscription = subscriber => new Subscription(subscriber)

module.exports = { insertNewSubscription }
