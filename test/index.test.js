import app from '../src/index'
import chai from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

const { expect } = chai

describe('Testing the index', () => {
  it('should get ok from /ping', async () => {
    chai
      .request(app)
      .get('/ping')
      .end((error, response) => {
        expect(error).to.equal(null)
        expect(response.status).to.equal(200)
        expect(response.text).to.equal('OK')
      })
  })
})
