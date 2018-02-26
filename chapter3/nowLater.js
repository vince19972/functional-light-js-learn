const ajax = (url, data, cb) => {
    // doSomething...
  }

// partially application of the
// ajax(url, data, cb) function
//// const getPerson = (data, cb) =>
////   ajax( "http://some.api/person", data, cb )

//// const getCurrentUser = cb =>
////   getPerson( {user: CURRENT_USER_ID}, cb )

// partial(..) utility
// closure!
const partial =
  (fn, ...presetArgs) =>
    (...laterArgs) =>
      fn( ...presetArgs, ...laterArgs )


/* using partial */

// 1. ajax example
//// const getPersonPartial =
////   partial( ajax, "http://some.api/person" )
//// const getCurrentUserPartial =
//// partial( getPersonPartial, { user: CURRENT_USER_ID } )

// 2. add & map
const add = (x, y) =>
  x + y

console.log( [1,2,3,4,5].map( partial(add, 3) ) )