const sumador = {
  resultado: 0,
  sumar: function(numeros) {
    numeros.forEach((n) => {
      this.resultado += n
    })
    return this.resultado
  },
  getThisResultado: function() {
    return () => {
      this.resta = 0
      return this
    }
  },
}

const triangulo = {
  a: { x: 1, y: 1 },
  b: { x: 2, y: 2 },
  c: { x: 3, y: 1 },
  area: function() {
    return Math.abs(
      (this.b.x - this.a.x) * (this.b.y - this.a.y) -
          ((this.c.x - this.a.x) * (this.c.y - this.a.y)) / 2
    )
  },
  areaArrow: () => {
    return Math.abs(
      (this.b.x - this.a.x) * (this.b.y - this.a.y) -
          ((this.c.x - this.a.x) * (this.c.y - this.a.y)) / 2
    )
  },
  areaArrowIFFE: function() {
    return (() => {
      return Math.abs(
        (this.b.x - this.a.x) * (this.b.y - this.a.y) -
            ((this.c.x - this.a.x) * (this.c.y - this.a.y)) / 2
      )
    })()
  },
}

module.exports = {
  triangulo,
  sumador
}