import express from 'express'
import routes from './routes/index.route'

// set up app
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ping
app.get('/ping', (req, res) => res.status(200).send('OK'))

// routes
app.use('/chat', routes.chat) // sends messages
app.use('/messages', routes.messages) // gets messages

module.exports = app
