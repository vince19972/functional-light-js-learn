/* basic utilities */

const partialRight =
  (fn, ...presetArgs) =>
    (...laterArgs) =>
      fn( ...laterArgs, ...presetArgs )

const words = str => {
  return String( str )
      .toLowerCase()
      .split( /\s|\b/ )
      .filter( function alpha(v){
          return /^[\w]+$/.test( v )
      } )
}

const unique = list => {
  var uniqList = []

  for (let v of list) {
      // value not yet in the new list?
      if (uniqList.indexOf( v ) === -1 ) {
          uniqList.push( v )
      }
  }

  return uniqList
}

/* composition */

// single arg
const compose =
  (...fns) =>
    result =>
      [...fns].reverse().reduce(
        (result, fn) => fn( result )
        , result
      )

// multi args
const compose2 =
  (...fns) =>
    [...fns].reverse().reduce(
      (fn1, fn2) =>
        (...args) =>
          fn2( fn1( ...args ) )
    )

console.log(compose( unique, words )('hello from the other side'))
console.log(compose2( unique, words )('hello from the other side'))


/* recursive */

const compose =
    (...fns) => {
        // pull off the last two arguments
        var [ fn1, fn2, ...rest ] = fns.reverse()

        var composedFn =
            (...args) =>
                fn2( fn1( ...args ) )

        if (rest.length == 0) return composedFn

        return compose( ...rest.reverse(), composedFn )
    }