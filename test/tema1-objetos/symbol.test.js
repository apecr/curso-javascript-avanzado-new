/* global describe, it x*/
const obj = require('./../../src/tema1-objetos/symbol')
const { expect } = require('chai')

describe('Symbol', () => {
  it('Get the key for Symbol', () => {
    expect(Symbol.keyFor(Symbol.for('Julian'))).to.be.equal('Julian')
  })
  it('miSimbolo', () => {
    expect(obj[Object.getOwnPropertySymbols(obj)[0]]).to.be.equal('Julian')
    expect(JSON.stringify(obj)).to.be.equal('{}')
    expect(Object.keys(obj)).to.have.lengthOf(0)
    expect(Object.getOwnPropertyNames(obj)).to.have.lengthOf(0)
  })
})
