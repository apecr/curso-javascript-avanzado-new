const miSimbolo = Symbol('Julian')

console.log(Symbol.keyFor(Symbol.for('Julian')))

const obj = {}
obj[miSimbolo] = 'Julian'
console.log(JSON.stringify(obj))
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))
