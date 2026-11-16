/*
 * `Greatest Common Divisor`
 * 
 * Write a function gcd that computes the greatest common divisor (GCD) of two non-negative integers a and b.
 * 
 * The greatest common divisor is the largest positive integer that divides both numbers without leaving a remainder.
 * 
 * If one of the numbers is 0 and the other is positive, their GCD is the positive number.
 * If both numbers are 0, return 0.
 */


function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}


console.log(gcd(12, 18));                           // 6
console.log(gcd(18, 12));                           // 6
console.log(gcd(7, 13));                            // 1
console.log(gcd(0, 5));                             // 5
console.log(gcd(5, 0));                             // 5
console.log(gcd(0, 0));                             // 0
console.log(gcd(10, 10));                           // 10
console.log(gcd(1000000000, 999999999));            // 1