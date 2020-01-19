import app from '../src/index'
import sinon from 'sinon'
import chai from 'chai'
import { sampleAllMessages, sampleConversation} from './sampleData'
import messageQueries from '../src/dao/controllers/messages.controller'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)
const { expect } = chai

describe('Route - GET /messages', () => {
  let allMessagesStub
  before(() => {
    allMessagesStub = sinon.stub(messageQueries, 'queryForAllMessages')
    allMessagesStub.onFirstCall().resolves(sampleAllMessages)
    allMessagesStub.onSecondCall().throws(new Error())
  })
  after(() => {
    allMessagesStub.restore()
  })
  it('should return all messages with no url query parameters', (done) => {
    chai
      .request(app)
      .get('/messages')
      .end((error, response) => {
        expect(error).to.equal(null)
        expect(response.status).to.equal(200)
        expect(response.body[0].from).to.equal(sampleAllMessages[0].from)
        done()
      })
  })
  it('should catch an error thrown from the query', (done) => {
    chai
      .request(app)
      .get('/messages')
      .end((error, response) => {
        expect(error).to.equal(null)
        expect(response.status).to.equal(400)
        done()
      })
  })
})
describe('Route - GET /messages/between', () => {
  let conversationStub
  before(() => {
    conversationStub = sinon.stub(messageQueries, 'queryForConversation')
    conversationStub.onFirstCall().resolves(sampleConversation)
    conversationStub.onSecondCall().throws(new Error())
  })
  after(() => {
    conversationStub.restore()
  })
  it('should return conversation with url query parameters', (done) => {
    chai
      .request(app)
      .get('/messages/between?to=Joel&from=Test')
      .end((error, response) => {
        expect(error).to.equal(null)
        expect(response.status).to.equal(200)
        expect(response.body[0].from).to.equal(sampleConversation[0].from)
        done()
      })
  })
  it('should catch an error thrown from the query', (done) => {
    chai
      .request(app)
      .get('/messages/between?to=Joel&from=Test')
      .end((error, response) => {
        expect(error).to.equal(null)
        expect(response.status).to.equal(400)
        done()
      })
  })
})
