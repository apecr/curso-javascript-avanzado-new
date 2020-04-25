/* global describe, it x*/

'use strict'

const enigma = require('../index')
const expect = require('chai').expect

const saluda = function(nombre) {
  return `Hola ${nombre} !`
}

const saluda2 = function(saludo, nombre) {
  return `${saludo} ${nombre} !`
}

const saludaWithThis = function(saludo) {
  return `${saludo}, ${this.nombre} !`
}

describe('Enigma function (aplicacion parcial a una funcion)', () => {
  it('Two params invoked', () => {
    var cosa = enigma(saluda, 'Mundo')
    expect(cosa()).to.equal('Hola Mundo !')
  })
  it('Three params invoked', () => {
    var cosa = enigma(saluda2, 'Hola', 'Mundo')
    expect(cosa()).to.equal('Hola Mundo !')
  })
  it('Three params invoked with this involved', () => {
    var dario = {nombre: 'Dario'}
    var cosa = enigma(saludaWithThis, 'Que pasa')

    //Aqui si podemos asignar el contexto dario a la funcion saludaWithThis
    expect(cosa.call(dario)).to.equal('Que pasa, Dario !')
  })
})