let Make = function (...args1) {
  let func = function (...args2) {
    if (typeof args2[0] === 'function' && args2.length === 1) {
      return args1.reduce(args2[0])
    } else {
      return Make(...args1, ...args2)
    }
  }
  return func
}

module.exports = Make
