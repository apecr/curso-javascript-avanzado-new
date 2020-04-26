/* global describe, it x*/
const {
  bind,
  curry,
  removeDuplicates,
} = require('./../../src/tema1-objetos/objetos')
const { expect } = require('chai')

describe('Using bind and curry', () => {
  it('Should use the two functions', () => {
    function getter(prop) {
      return this[prop]
    }
    function setter(prop, value) {
      this[prop] = value
    }
    const manuel = {
      nombre: 'Manuel',
      edad: 32,
    }
    const getEdadManuel = bind(manuel, curry(getter, 'edad'))
    expect(getEdadManuel()).to.be.equal(32)
  })
  describe('Bind use cases', () => {
    it('Should get the this object', () => {
      const thisObject = {}
      const algo = bind(thisObject, function() {
        return this
      })
      const algo2 = bind({}, function() {
        return this
      })
      expect(algo()).to.be.equal(thisObject)
      expect(algo2()).to.not.be.equal(thisObject)
    })
    it('Should not allow rebind this', () => {
      const barbara = { name: 'Barbara' }
      const carlos = { name: 'Carlos' }
      const barbaraBinded = bind(barbara, function(saludo) {
        return saludo + ', ' + this.name
      })
      expect(barbaraBinded('Hola')).to.be.equal('Hola, Barbara')
      expect(barbaraBinded.call(carlos, 'Hola')).to.not.be.equal(
        'Hola, Carlos'
      )
    })
  })
})

describe('Remove duplicates', () => {
  it('Should remove all duplicates', () => {
    const duplicates = [1, 2, 2, 3, 3, 3, 4, 5, 5]
    expect(removeDuplicates(duplicates)).to.be.deep.equal([1, 2, 3, 4, 5])
  })
})

describe('Getters and setters', () => {
  it('Should use getters and setters', () => {
    const objeto = {
      a: 7,
      get b() {
        return this.a + 1
      },
      set c(x) {
        this.a = x / 2
      },
    }
    expect(objeto.a).to.be.equal(7)
    expect(objeto.b).to.be.equal(8)
    objeto.c = 50
    expect(objeto.a).to.be.equal(25)
  })
})