/*
* This is a program that checks for multiples of 3 and 5 between 0 and 1000
* and returns their total.
* In this case we console log over returning
*/

const multiples = (endVal) => {
  let total = 0;
  for ( let i=1; i<endVal; i++ ) {
    if (i%3 == 0 || i%5 == 0) { 
      total += i
    }
  }
  console.log(total)
}

multiples(1000)