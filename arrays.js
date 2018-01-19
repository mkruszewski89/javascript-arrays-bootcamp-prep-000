var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(element, array) {
  var newArray = array
  newArray.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(element, array) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(element, array) {
  var newArray = array
  newArray.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray(element, array) {
  array.push(element)
  return array
}
