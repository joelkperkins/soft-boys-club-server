import app from '../src/index'
import insertQueries from '../src/dao/controllers/chat.controller'
import { expectedMessageBody, reactMessageBody } from './sampleData'
import sinon from 'sinon'
import chai from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)
const { expect } = chai

describe('Route - POST /chat/send', () => {
  let sendMessageStub
  before(() => {
    sendMessageStub = sinon.stub(insertQueries, 'sendMessage')
    sendMessageStub.onFirstCall().resolves(true)
    sendMessageStub.onSecondCall().throws(new Error(500))
  })
  after(() => {
    sendMessageStub.restore()
  })
  it('should respond with status 200', (done) => {
    chai
      .request(app)
      .post('/chat')
      .send(expectedMessageBody)
      .end((error, response) => {
        expect(error).to.equal(null)
        expect(response.status).to.equal(200)
        done()
      })
  })
  it('should catch an error thrown from the insert query', (done) => {
    chai
      .request(app)
      .post('/chat')
      .send(expectedMessageBody)
      .end((error, response) => {
        expect(error).to.equal(null)
        expect(response.status).to.equal(500)
        done()
      })
  })
})

describe('Route - PUT /chat/react', () => {
  let reactMessageStub
  before(() => {
    reactMessageStub = sinon.stub(insertQueries, 'reactMessage')
    reactMessageStub.onFirstCall().resolves(true)
    reactMessageStub.onSecondCall().throws(new Error(500))
  })
  after(() => {
    reactMessageStub.restore()
  })
  it('should respond with status 204', (done) => {
    chai
      .request(app)
      .put('/chat/react')
      .send(reactMessageBody)
      .end((error, response) => {
        expect(error).to.equal(null)
        expect(response.status).to.equal(204)
        done()
      })
  })
  it('should catch an error thrown from the update query', (done) => {
    chai
      .request(app)
      .put('/chat/react')
      .send(reactMessageBody)
      .end((error, response) => {
        expect(error).to.equal(null)
        expect(response.status).to.equal(500)
        done()
      })
  })
})
