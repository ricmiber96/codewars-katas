export function mainFuction(digits) {

  // let arrayResult = []
  // let  result
  // if(digits.length<=6){

  //   for(let i=digits.length; i>0; i-=2){
  //     arrayResult.push(parseInt(digits.substring(i, i-2)))
  //   }

  //   return result[result.length-1]
  // }

  
  // for(let i=digits.length; i>0; i -= 5){

  //   arrayResult.push(parseInt(digits.substring(i,i-5)))

  // }
  // result = arrayResult.sort((a,b) => a - b)

  // return result[result.length-1];

  let arrayResult = []
  let arrayNumbers = digits.split('')

  for (let i = 0; i < arrayNumbers.length; i++) {
    
    if(arrayNumbers[i+1] !== undefined){
      arrayResult.push(parseInt(digits.substring(i,i+5)))
    }
   
  }
  return Math.max(...arrayResult)
}
