/*
 * `Nine or Nein?`
 * 
 * You are given two positive integers, A and B.
 * Calculate the sum (A + B), difference (A - B), product (A * B), and quotient (A / B).
 * If at least one of these four values is exactly equal to 9, return the string "Nine". Otherwise, return "Nein".
 */
 

function checkMathOperationsForNine(a: number, b: number): string {

    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const quotient = a / b;

    if (sum === 9 || difference === 9 || product === 9 || quotient === 9) {
        return "Nine"
    } else {
        return "Nein"
    }

}


console.log(checkMathOperationsForNine(5, 4));          // Nine
console.log(checkMathOperationsForNine(10, 1));         // Nine