const sampleAllMessages = [
  {
    from: 'Test',
    to: 'Joel',
    message: 'hello',
    createdAt: '0000-00-00T00:00:00.000Z'
  },
  {
    from: 'notTest',
    to: 'stillJoel',
    message: 'is it me you are looking for',
    createdAt: '0000-00-00T00:00:00.000Z'
  }
]

const sampleConversation = [
  {
    from: 'Test',
    to: 'Joel',
    message: 'hello',
    createdAt: '0000-00-00T00:00:00.000Z'
  },
  {
    from: 'Test',
    to: 'Joel',
    message: 'is it me you are looking for',
    createdAt: '0000-00-00T00:00:00.000Z'
  }
]

const reactMessageBody = {
  id: 'test',
  reaction: 'test'
}

const expectedMessageBody = {
  from: 'test',
  to: 'test',
  message: 'test'
}

const invalidMessageBody = {}

const arrayOfInvalidMessageBodyMissingKeys = [
  {
    from: 'test',
    to: 'test'
  },
  {
    from: 'test',
    message: 'test'
  },
  {
    message: 'test',
    to: 'test'
  }
]

const arrayOfInvalidMessageBodyNonStringValues = [
  {
    from: 'test',
    to: 'test',
    message: 19
  },
  {
    from: 'test',
    to: 19,
    message: 'test'
  },
  {
    from: 19,
    to: 'test',
    message: 'test'
  }
]

module.exports = {
  sampleAllMessages,
  sampleConversation,
  reactMessageBody,
  expectedMessageBody,
  invalidMessageBody,
  arrayOfInvalidMessageBodyMissingKeys,
  arrayOfInvalidMessageBodyNonStringValues
}
