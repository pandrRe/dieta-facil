//https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function(result, key) {
      result[key] = mapFn(object[key])
      return result
  }, {})
}

function objectFilter(object, filterFn) {
  return Object.keys(object)
    .filter((key) => {
      return filterFn(object[key]);
    })
    .reduce( (result, key) => {
      result[key] = object[key];
      return result;
    }, {});
}

export { objectMap, objectFilter };