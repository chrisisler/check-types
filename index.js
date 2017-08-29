// Function -> Function -> Function
const curry2 = f => (...args) => args.length === 1 ? b => f(args[0], b) : f(...args)

// (Function, Any) -> Boolean
exports.isType = (tag, x) => Object.prototype.toString.call(x) === `[object ${tag}]`

// An identity function combinator which enhances the input function or data with
// basic type checking capabilities. 
// [Function] -> Function|Any -> Function|Any
module.exports = exports = exports.default = curry2((tags, valOrFn) => {
  if (!exports.isType('Array', tags)) {
    throw new TypeError(`First parameter must be an Array, instead is: ${typeof tags}`)
  }

  const notAFunction = tags.some(t => !exports.isType('Function', t))
  if (notAFunction !== void 0) {
    throw new TypeError(`Every value in the first argument must be a Function, instead is: ${notAFunction}`)
  }

  const isFn = exports.isType('Function', valOrFn)
  if (isFn === true && tags.length !== valOrFn.length) {
    throw new Error(`Number of types does not match arity of given function: ${valOrFn.name}`)
  }

  const errIdx = args.findIndex((arg, idx) => !exports.isType(tags[idx].name, arg))
  if (errIdx !== -1) {
    throw new TypeError(`Type mismatch: Argument at index ${errIdx} should be of type ${tags[errIdx].name}.`)
  }

  return valOrFn
})
