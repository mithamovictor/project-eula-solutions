/*
* Each new term in the Fibonacci sequence is generated 
* by adding the previous two terms. By starting with 1 
* and 2, the first 10 terms will be:
* 
* 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
*
* By considering the terms in the Fibonacci sequence 
* whose values do not exceed four million, find the sum
* of the even-valued terms.
*/

const fibonacci = () => {
  let sum = 0,
      firstNum = 1, 
      lastNum = 2,
      nextNum = 0
  if (firstNum%2 === 0) { sum += firstNum }
  if (lastNum%2 === 0) { sum += lastNum }
  while (sum <= 4000000) {
    nextNum = firstNum + lastNum
    firstNum = lastNum
    lastNum = nextNum
    if (nextNum%2 === 0) { sum += nextNum }
  }
  return sum
}

console.log(fibonacci())