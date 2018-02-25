// Certain APIs don't let you pass a value directly into a method,
// but require you to pass in a function

// doesn't work:
//// p1.then( foo ).then( p2 ).then( bar );

// instead:
//// p1.then( foo ).then( function(){ return p2; } ).then( bar );

const constant =
  v =>
    () =>
      v

//// p1.then( foo ).then( constant( p2 ) ).then( bar )