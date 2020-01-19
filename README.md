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
  chatroom: <CHATROOM NAME>
}
```

The default db string and the chatroom name will work for testing. 

## <a name="routes"></a>Routes

Get all messages in database sent in last 30 days, limited to 100

```
GET /messages

/**
 * @apiRoute get '/messages' Gets all messages sent by users within 100 days, limited to 100
 *
 * @apiQueryParam {string} sender - if included api will query for messages from specific sender, if either is not included the endpoint returns all messages
 *
 * @apiQueryParam {string} recipient - if included api will query for messages to specific recipient, , if either is not included the endpoint returns all messages
 *
 * @apiSuccess {Array} Array of messages
 */
```

Gets all messages sent between two users within 100 days, limited to 100

```
GET /messages/between?to=<string>&from<string>

/**
 * @apiRoute get '/messages/between' Gets all messages sent between two users within 100 days, limited to 100
 *
 * @apiQueryParam {string} to - user who recieved the message
 *
 * @apiQueryParam {string} from - user who sent the message
 *
 * @apiSuccess {Array} Array of message objects
 */
```

Send a message to another user

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

React to a message received 

```
PUT /chat/react

/**
 * @apiRoute PUT '/react' User reacts to a message they received
 *
 * @apiBody {object} { messageId: <string>, reaction: <string>} Object containing id of message
 *
 * @apiSuccess {String} Number of updated messages
 */
```

## <a name="notes"></a>Notes

Our Demo Mongo database will eventually run out of space. Please dont spam messages while testing. 

## <a name="author"></a>Author

Joel K. Perkins

