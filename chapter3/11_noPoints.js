/* predefined functions */

const uncurry =
  fn =>
      (...args) => {
          var ret = fn

          for (let arg of args) {
              ret = ret( arg )
          }

          return ret
      }

const partialRight =
  (fn, ...presetArgs) =>
    (...laterArgs) =>
      fn( ...laterArgs, ...presetArgs )


/* points version */

const output =
  txt =>
    console.log(txt)

const printIf =
  (predicate, msg) => {
    if ( predicate(msg) ) output(msg)
  }

const isShortEnough =
  str =>
    str.length <= 5

const isLongEnough =
  str =>
    !isShortEnough(str)

const msg1 = "Hello"
const msg2 = msg1 + " World!"

printIf( isLongEnough, msg1 )
printIf( isLongEnough, msg2 )
printIf( isShortEnough, msg1 )
printIf( isShortEnough, msg2 )


/* implement no-point functions */

const not =
  predicate =>
    (...args) =>
      !predicate(...args)

const when =
  (predicate, fn) =>
    (...args) =>
      predicate( ...args ) ? fn( ...args ) : undefined

const printIfNew = uncurry( partialRight( when, output ) )

const isLong = not( isShortEnough )

printIfNew( isShortEnough, msg1 )
printIfNew( isShortEnough, msg1 )
printIfNew( isLong, msg1 )
printIfNew( isLong, msg2 )