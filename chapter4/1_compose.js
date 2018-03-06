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

const skipShortWords = words => {
  var filteredWords = []

  for (let word of words) {
      if (word.length > 4) {
          filteredWords.push( word )
      }
  }

  return filteredWords
}

const skipLongWords = words => {
  var filteredWords = []

  for (let word of words) {
      if (word.length <= 4) {
          filteredWords.push( word )
      }
  }

  return filteredWords
}

const text = "To compose two functions together, pass the \
output of the first function call as the input of the \
second function call."

/* composition functions */

// two args composition
const compose2 =
    (fn2,fn1) =>
        origValue =>
            fn2( fn1( origValue ) )

// general composition
const compose =
  (...fns) =>
    result => {
      let list = [...fns]

      while (list.length > 0) {
        result = list.pop()( result )
      }

      return result
    }


/* progress of composing */

// stage 1
const wordsFound = words( text )
const wordsUsed1 = unique( wordsFound )

// stage 2
const wordsUsed2 = unique( words( text ) )

// stage 3
const wordsUsed3 = compose2( unique, words )( text )

// stage 4
const biggerWords = compose( skipShortWords, unique, words )
const wordsUsed4 = biggerWords( text )

console.log(wordsUsed4)

// partial right
const filterWords = partialRight( compose, unique, words )

const biggerWords2 = filterWords( skipShortWords )
const shorterWords2 = filterWords( skipLongWords )

console.log(biggerWords2( text ))
// console.log(shorterWords2( text ))