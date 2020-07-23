import express from 'express'
import routes from './routes/index.route'
import dotenv from 'dotenv'
dotenv.config()

// set up app
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ping
app.get('/', (req, res) => res.status(200).send('BE SOFT'))
app.get('/ping', (req, res) => res.status(200).send('OK'))

// routes
app.use('/subscribe', routes.subscription) // sends messages
app.use('/notification', routes.notification) // gets messages

module.exports = app
