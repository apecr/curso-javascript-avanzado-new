/* global describe, it */
const { expect } = require('chai')
const { triangulo, sumador } = require('./../../src/tema1-objetos/arrow')

describe('Arrow functions', () => {
  it('Bind triangulo', () => {
    expect(triangulo.area()).to.be.equal(1)
    expect(triangulo.areaArrow).to.throw(
      /Cannot read property 'x' of undefined/
    )
    expect(triangulo.areaArrowIFFE()).to.be.equal(1)

    function foo() {
      const f = () => arguments[0]
      return f(2)
    }
    expect(foo(1)).to.be.equal(1)

    expect(sumador.sumar([1, 2, 3])).to.be.equal(6)
    const resultado = sumador.getThisResultado()()
    expect(resultado.resta).to.be.equal(0)
    expect(resultado.resultado).to.be.equal(6)
  })
})
