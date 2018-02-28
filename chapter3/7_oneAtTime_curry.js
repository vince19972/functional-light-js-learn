/* curry function */

const curryES6 =
    (fn,arity = fn.length) =>
        (nextCurried = prevArgs =>
            nextArg => {
                var args = [ ...prevArgs, nextArg ];

                if (args.length >= arity) {
                    return fn( ...args );
                }
                else {
                    return nextCurried( args );
                }
            }
        )( [] );

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

/* example functions */

const add = (x, y) =>
  x + y

const sum = (...nums) => {
    var total = 0
    for (let num of nums) {
        total += num
    }
    return total
}

/* test */

const addTest = [1,2,3,4,5].map( curry( add )( 3 ) )
console.log( addTest )

const sumTest = curry( sum, 5 )
console.log( sumTest(1)(2)(3)(4)(5) )