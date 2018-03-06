/* contrived functions to be abstracted */

const saveComment = txt => {
  if (txt != '')
    comments[comments.length] = txt
}

const trackEvent = evt => {
  if (evt.name != undefined)
    events[evt.name] = evt
}

/* abstraction */

const storeData =
  (store, location, value) =>
    store[location] = value

const saveComment = txt => {
    if (txt != '')
      storeData( comments, comments.length, txt )
  }

const trackEvent = evt => {
  if (evt.name != undefined)
    storeData( events, evt.name, evt )
}

/* level 2 abstraction */

const conditionallyStoreData(store,location,value,checkFn)  => {
  if (checkFn( value, store, location )) {
      store[location] = value;
  }
}

const notEmpty = val =>
  val != ""

const isUndefined = val =>
  val === undefined

const isPropUndefined = (val,obj,prop) =>
  isUndefined( obj[prop] )


const saveComment = txt =>
  conditionallyStoreData( comments, comments.length, txt, notEmpty )


const trackEvent = evt =>
  conditionallyStoreData( events, evt.name, evt, isPropUndefined )
