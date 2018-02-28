/* All for One */

const unary =
  fn =>
    arg =>
      fn(arg)

const test = ['1', '2', '3'].map( parseInt )
const test2 = ['1', '2', '3'].map( unary(parseInt) )

console.log(test)
console.log(test2)