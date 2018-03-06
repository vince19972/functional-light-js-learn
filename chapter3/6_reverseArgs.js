const reverseArgs =
  fn =>
    (...args) =>
      fn( ...args.reverse() )

const partialRight =
  (fn, ...presetArgs) =>
    (...laterArgs) =>
      fn( ...laterArgs, ...presetArgs )

const foo = (x, y, z, ...rest) =>
  console.log(x, y, z, rest)

const f = partialRight( foo, 'z:last' )

f(1,2)
f(1)
f(1,2,3)
f(1,2,3,4)