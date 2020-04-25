'use strict'


module.exports = function enigma(fn) {
  var slice = Array.prototype.slice
  var args = slice.call(arguments, 1)
  return function() {
    var newargs = slice.call(arguments)
    return fn.apply(this, args.concat(newargs))
  }
}