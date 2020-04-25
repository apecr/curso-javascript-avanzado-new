/* global describe, it x*/
const {
  bind,
  curry,
  removeDuplicates,
} = require("./../../src/tema1-objetos/objetos");
const { expect } = require("chai");

describe("Using bind and curry", () => {
  it("Should use the two functions", () => {
    function getter(prop) {
      return this[prop];
    }
    function setter(prop, value) {
      this[prop] = value;
    }
    const manuel = {
      nombre: "Manuel",
      edad: 32,
    };
    const getEdadManuel = bind(manuel, curry(getter, "edad"));
    expect(getEdadManuel()).to.be.equal(32);
  });
  describe("Bind use cases", () => {
    it("Should get the this object", () => {
      const thisObject = {};
      const algo = bind(thisObject, function () {
        return this;
      });
      const algo2 = bind({}, function () {
        return this;
      });
      expect(algo()).to.be.equal(thisObject);
      expect(algo2()).to.not.be.equal(thisObject);
    });
    it("Should not allow rebind this", () => {
      const barbara = { name: "Barbara" };
      const carlos = { name: "Carlos" };
      const barbaraBinded = bind(barbara, function (saludo) {
        return saludo + ", " + this.name;
      });
      expect(barbaraBinded("Hola")).to.be.equal("Hola, Barbara");
      expect(barbaraBinded.call(carlos, "Hola")).to.not.be.equal(
        "Hola, Carlos"
      );
    });
  });
});

describe("Remove duplicates", () => {
  it("Should remove all duplicates", () => {
    const duplicates = [1, 2, 2, 3, 3, 3, 4, 5, 5];
    expect(removeDuplicates(duplicates)).to.be.deep.equal([1, 2, 3, 4, 5]);
  });
});

describe("Getters and setters", () => {
  it("Should use getters and setters", () => {
    const objeto = {
      a: 7,
      get b() {
        return this.a + 1;
      },
      set c(x) {
        this.a = x / 2;
      },
    };
    expect(objeto.a).to.be.equal(7);
    expect(objeto.b).to.be.equal(8);
    objeto.c = 50;
    expect(objeto.a).to.be.equal(25);
  });
});

describe("Arrow functions", () => {
  it("Bind triangulo", () => {
    const triangulo = {
      a: { x: 1, y: 1 },
      b: { x: 2, y: 2 },
      c: { x: 3, y: 1 },
      area: function () {
        return Math.abs(
          (this.b.x - this.a.x) * (this.b.y - this.a.y) -
            ((this.c.x - this.a.x) * (this.c.y - this.a.y)) / 2
        );
      },
      areaArrow: () => {
        return Math.abs(
          (this.b.x - this.a.x) * (this.b.y - this.a.y) -
            ((this.c.x - this.a.x) * (this.c.y - this.a.y)) / 2
        );
      },
      areaArrowIFFE: function () {
        return (() => {
          return Math.abs(
            (this.b.x - this.a.x) * (this.b.y - this.a.y) -
              ((this.c.x - this.a.x) * (this.c.y - this.a.y)) / 2
          );
        })();
      },
    };
    expect(triangulo.area()).to.be.equal(1);
    expect(triangulo.areaArrow).to.throw(
      /Cannot read property 'x' of undefined/
    );
    expect(triangulo.areaArrowIFFE()).to.be.equal(1);

    const arguments = 42;
    const arr = () => arguments;
    expect(arr()).to.be.equal(42);

    function foo() {
      const f = () => arguments[0];
      return f(2);
    }
    expect(foo(1)).to.be.equal(1);

    const sumador = {
      resultado: 0,
      sumar: function (numeros) {
        numeros.forEach((n) => {
          this.resultado += n;
        });
        return this.resultado;
      },
      getThisResultado: function () {
        return () => {
          this.resta = 0;
          return this;
        };
      },
    };
    expect(sumador.sumar([1, 2, 3])).to.be.equal(6);
    const resultado = sumador.getThisResultado()();
    expect(resultado.resta).to.be.equal(0);
    expect(resultado.resultado).to.be.equal(6);
  });
});