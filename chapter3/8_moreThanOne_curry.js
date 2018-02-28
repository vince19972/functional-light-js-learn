function looseCurry(fn,arity = fn.length) {
  return (function nextCurried(prevArgs){
      return function curried(...nextArgs){
          var args = [ ...prevArgs, ...nextArgs ]

          if (args.length >= arity) {
              return fn( ...args )
          }
          else {
              return nextCurried( args )
          }
      }
  })( [] )
}

const sum = (...nums) => {
  var total = 0
  for (let num of nums) {
      total += num
  }
  return total
}


const curriedSum = looseCurry( sum, 5 )

console.log( curriedSum(1)(2,3)(4,5) )