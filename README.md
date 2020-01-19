# Guild Chat

Guild Chat is an API integrated with MongoDB to stand up a simple messaging application

## Table of Contents

1. [Installation and Usage](#installation-and-usage)
2. [Configuration](#configuration)
3. [Routes](#routes)
4. [Notes](#notes)
5. [Author](#author)

## <a name="installation-and-usage"></a>Installation and Usage

Prerequisites: [Node.js](https://nodejs.org/) (`>=12.14.0`)

You can clone this repo:

```
$ git clone https://github.com/joelkperkins/guild-chat.git
```

Then, install 

```
$ git npm install
```

After that, you can run Guild Chat like this:

```
$ npm start
```

## <a name="configuration"></a>Configuration

After cloning Guild Chat, you'll have a `config.js` file in your directory. In it, you'll see some rules configured like this:

```
{
  port: 3000,
  db: <INSERT DB URI>,
  collection: <INSERT COLLECTION NAME>
}
```

The default db string and the chatroom name will work for testing. 

## <a name="routes"></a>Routes

Get all messages in database sent in last 30 days, limited to 100. Send a `GET` to '/messages' to retrieve all messages. 

```
GET /messages

/**
 * @apiRoute get '/messages' Gets all messages sent by users within 100 days, limited to 100
 *
 * @apiSuccess {object[]} Array of message objects
 */
```

Gets all messages sent between two users within 100 days, limited to 100. Send a `GET` to '/messages?to=<string>&from=<string>' with added url query parameters indicating the users whose conversation you would like to retrieve. 

```
GET /messages/between?to=<string>&from<string>

/**
 * @apiRoute get '/messages/between' Gets all messages sent between two users within 100 days, limited to 100
 *
 * @apiQueryParam {string} to - user who recieved the message
 *
 * @apiQueryParam {string} from - user who sent the message
 *
 * @apiSuccess {object[]} Array of message objects
 */
```

Send a message to another user. Send a `POST` to '/chat' with a body containing the sender, recipient, and message. The message is saved and can be retrieved with the GET routes. 

```
POST /chat

/**
 * @apiRoute POST '/send' Send a chat message to another user
 *
 * @apiBody {object} { to: {string}, from: {string}, message: {string} }
 *
 * @apiSuccess {String} Confirmation of sent message, returns ID of message
 */
```

React to a message received. Send a `PUT` to '/chat/react' with a body containing the ID of the message to react to and reaction string. This reaction is saved with the message. 

Currently accepted reactions are: 
 > 'like'
 > 'dislike"

```
PUT /chat/react

/**
 * @apiRoute PUT '/react' User reacts to a message they received
 *
 * @apiBody {object} { messageId: <string>, reaction: <string>} Object containing id of message and reaction ('like/dislike')
 *
 * @apiSuccess {String} Number of updated messages
 */
```

## <a name="notes"></a>Notes

Our Demo Mongo database will eventually run out of space. Please dont spam messages while testing.
100 stars and we will add a delete function. 

## <a name="author"></a>Author

Joel K. Perkins

