export function sumOfMinimums(arr) {
  const arrayResult = []
  for (var i = 0; i < arr.length; i++) {
    arrayResult.push(Math.min(...arr[i]))
  }
  let result = arrayResult.reduce((prev, current) => prev + current)
  return result
}
