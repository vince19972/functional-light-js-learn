/* All for One */

const unary =
  fn =>
    arg =>
      fn(arg)

const test = ['1', '2', '3'].map( parseInt )
const test2 = ['1', '2', '3'].map( unary(parseInt) )

console.log(test)
console.log(test2)

/* One on One */

const identity =
  v => v

const words = "   Now is the time for all...  ".split( /\s|\b/ )
const filtered = words.filter( identity )
const booleaned = words.filter( Boolean )

console.log(filtered)
console.log(booleaned)

const output =
  (msg, fmt = identity) =>
    fmt(msg)

const upper =
  msg =>
    msg.toUpperCase()

console.log( output('test') )
console.log( output('test', upper) )