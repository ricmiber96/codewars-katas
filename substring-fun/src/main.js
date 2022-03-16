export function mainFuction(arrayString) {
  if(arrayString.length === 0) return ''

  const arrayResult = []
  let result 
  arrayString.forEach((element,i)=>{
    arrayResult.push(element.substring(i,i+1))
  })
  result = arrayResult.toString().replaceAll(",","")
  return result
}

/**ANOTHER SOLUTION with replace function */
// function nthChar(words){
//   if(words.length === 0) return ''

//   const arrayResult = []
//   let result 
//   words.forEach((element,i)=>{
//     arrayResult.push(element.substring(i,i+1))
//   })
//   result = arrayResult.toString().replace(/,/g,"")
//   return result
// }