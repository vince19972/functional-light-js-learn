const foo =
  (x, y) =>
    console.log( x + y )

const bar =
  fn =>
    fn( [3, 9] )

const spreadArgs =
  fn =>
    argsArr =>
      fn( ...argsArr )

// bar( spreadArgs( foo ) )

const gatherArgs =
  fn =>
    ( ...argsArr ) =>
      fn( argsArr )

const combineFirstTwo =
  ([ v1, v2 ]) =>
    v1 + v2

const gathered =
  [1,2,3,4,5].reduce( gatherArgs( combineFirstTwo ) )

console.log( gathered )