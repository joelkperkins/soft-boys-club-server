import { Subscription } from '../dao'
import keys from './responseKeys.query'

/**
 * @function getAllSubscribersQuery generates a query for all subscribers
 *
 * @returns {object} Returns mongoose query for the subscribers
 */

const getAllSubscribersQuery = async () => Subscription
  .find({}, keys);

module.exports = { getAllSubscribersQuery }
