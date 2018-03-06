const pipe =
  (...fns) =>
    result => {
      let list = [...fns]

      while (list.length > 0) {
        result = list.shift()( result )
      }

      return result
    }