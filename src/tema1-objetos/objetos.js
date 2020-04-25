
function bind(ctx, fn) {
  return function() {
    return fn.apply(ctx, arguments)
  }
}

const curry = function(fn) {
  const args = Array.prototype.slice.call(arguments, 1)
  return function() {
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)))
  }
}

function removeDuplicates(items) {
  return [ ...new Set(items) ]
}

module.exports = {
  bind,
  curry,
  removeDuplicates
}