/* functions */

function curry(fn,arity = fn.length) {
  return (function nextCurried(prevArgs){
      return function curried(nextArg){
          var args = [ ...prevArgs, nextArg ];

          if (args.length >= arity) {
              return fn( ...args );
          }
          else {
              return nextCurried( args );
          }
      };
  })( [] );
}

function uncurry(fn) {
  return function uncurried(...args){
      var ret = fn

      for (let arg of args) {
          ret = ret( arg )
      }

      return ret
  }
}

// es6
var uncurry =
  fn =>
      (...args) => {
          var ret = fn

          for (let arg of args) {
              ret = ret( arg )
          }

          return ret
      }

/* example */

const sum = (...nums) => {
    var sum = 0
    for (let num of nums) {
        sum += num
    }
    return sum
}

const curriedSum = curry( sum, 5 )
const uncurriedSum = uncurry( curriedSum )

console.log( curriedSum( 1 )( 2 )( 3 )( 4 )( 5 ) )
console.log( uncurriedSum( 1, 2, 3, 4, 5 ) )
console.log( uncurriedSum( 1, 2, 3 )( 4 )( 5 ) )