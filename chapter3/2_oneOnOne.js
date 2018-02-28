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