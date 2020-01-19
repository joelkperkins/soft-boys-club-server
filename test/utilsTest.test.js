import {
  expectedMessageBody,
  invalidMessageBody,
  arrayOfInvalidMessageBodyMissingKeys,
  arrayOfInvalidMessageBodyNonStringValues
} from './sampleData'
import { generateTimeStamp30DaysAgo, validMessageBody } from '../src/utilities/utils'
import chai from 'chai'
const { expect } = chai

describe('Function - generateTimeStamp30DaysAgo', () => {
  it('should return a time stamp in YYYY-MM-DD format', () => {
    const testTimesStamp = generateTimeStamp30DaysAgo()
    expect(typeof testTimesStamp).to.equal('string')
    expect(testTimesStamp.length).to.equal(10)
  })
})

describe('Function - validMessageBody', () => {
  it('should return false if there is no message body', () => {
    expect(validMessageBody(invalidMessageBody)).to.equal(false)
  })
  it('should return false if any key is missing', () => {
    for (let i = 0; i < arrayOfInvalidMessageBodyMissingKeys.length; i += 1) {
      expect(validMessageBody(arrayOfInvalidMessageBodyMissingKeys[i])).to.equal(false)
    }
  })
  it('should return false if any value is not a string', () => {
    for (let i = 0; i < arrayOfInvalidMessageBodyNonStringValues.length; i += 1) {
      expect(validMessageBody(arrayOfInvalidMessageBodyNonStringValues[i])).to.equal(false)
    }
  })
  it('should return true if all values are present in body', () => {
    const testResult = validMessageBody(expectedMessageBody)
    expect(testResult).to.equal(true)
  })
})
