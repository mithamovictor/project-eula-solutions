/*
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product 
 * of two 2-digit numbers is 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the 
 * product of two 3-digit numbers. 
 */

const palindromeNumbers = () => {
  let a, arr=[]
  for(let i=100; i<=999; i++) {
    for(let j=100; j<=999; j++) {
      a = i * j
      let string = String(a)
      let newInt = [...string].reduce((b, c) => c + b, '')
      if (String(a) == newInt) arr.push(a)
    }
  }
  let newArr = arr.sort((d,e)=>{return d-e})
  return newArr[newArr.length-1]
}
console.log(palindromeNumbers())

