import { dbConnect, disconnect } from '../dao'
import { getAllSubscribersQuery } from '../queries/getAllSubscribers.query'

/**
 * @function queryForAllSubscribers Connect to database, query for all subscribers in database then close database
 *
 * @param none
 *
 * @returns {object[]} Returns an array of subscriber objects [ { name: <string>, number: <string> }]
 */

const queryForAllSubscribers = async () => {
  await dbConnect().catch(e => { throw new Error(e) })
  return getAllSubscribersQuery().then((subscribers, err) => {
    if (err) throw new Error(err)
    disconnect()
    return subscribers
  })
}

module.exports = {
  queryForAllSubscribers
}
