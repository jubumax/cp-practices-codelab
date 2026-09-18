/*
 * `Repeated Digit Sum`
 * 
 * Given a non-negative integer, repeatedly add all its digits until the result has only one digit.
 */


function repeatedDigitSum(n) {

  while (n >= 10) {
    let sum = 0;
    let num = n;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    n = sum;
  }

  return n;

}


console.log(addDigits(38));             // 2
console.log(addDigits(0));              // 0
console.log(addDigits(9));              // 9
console.log(addDigits(123456));         // 3

