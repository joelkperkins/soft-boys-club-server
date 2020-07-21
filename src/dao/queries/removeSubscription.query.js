import { Subscription } from '../dao'

/**
 * @function removeSubscription deletes subscription record
 *
 * @param {string} name subscriber name to delete
 *
 * @param {string} number subscriber number to confirm delete
 * 
 * @returns {object} Returns mongoose query to delete the subscription
 */

const removeSubscription = async (name, number) => Subscription
  .deleteOne({ name: name, number: number });

module.exports = { removeSubscription }
