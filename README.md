# Soft Boys Club Server

Soft Boys Club Server is an API integrated with MongoDB to support the SBC: Radio with advanced functionality, like notification when a dj is live streaming

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
$ git clone https://github.com/joelkperkins/soft-boys-club-server.git
```

Then, install 

```
$ git npm install
```

After that, you can run SBC Server like this:

```
$ npm start
```

## <a name="configuration"></a>Configuration

After cloning SBC Server, you'll have a `config.js` file in your directory. In it, you'll see some rules configured like this:

```
{
  port: 3000,
  db: <INSERT DB URI>,
  collection: <INSERT COLLECTION NAME>
}
```

The default db string and the chatroom name will work for testing. 

## <a name="routes"></a>Routes

### POST /subscribe

Adds a new subscriber to our phone list. Send a `POST` to `/subscribe` with name and number to add a new subsriber

```
/**
 * @apiRoute POST '/subscribe' subscribes to alerts from sbc
 *
 * @apiBody {object} { name: {string}, number: {string} }
 *
 * @apiSuccess {String} Confirmation of subscription
 */
 ```

### DELETE /subscribe

Remove user from phone list. Send a `DELETE` to `/subscribe` with name and number of user to delete. 

```
/**
 * @apiRoute DELETE '/subscribe' remove user from subscription list
 *
 * @apiBody {object} { name: <string>, numbver: <string>}
 *
 * @apiSuccess {String} 200
 */
 ```

### GET /notification

Notify all subscribers. Send a `GET` to `/notification`. Queries for subs and sends a text through Twilio

```
/**
 * @apiRoute get '/notify' notifies all subscribers
 *
 * @apiSuccess 200
 */
```

## <a name="author"></a>Author

Oomrazoom

# soft-boys-club-server
