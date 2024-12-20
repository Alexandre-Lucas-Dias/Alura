const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
      typeString.indexOf(' ') + 1,
      typeString.indexOf(']')
    ).toLowerCase()
  }

console.log(typeCheck([])) // array
console.log(typeCheck(null)) // null
console.log(typeCheck({})) // object
console.log(typeCheck('teste')) // string
console.log(typeCheck(123)) // number 