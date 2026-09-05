/*
 * `Count Even and Odd Numbers`
 * 
 * Given an array of integers, return an object containing the count of even and odd numbers.
 */


function countEvenOdd(numbers: number[]): { even: number; odd: number } {
    const result: { even: number; odd: number } = { even: 0, odd: 0 };

    for (const num of numbers) {
        if (num % 2 === 0) {
            result.even++;
        } else {
            result.odd++;
        }
    }

    return result;
}


console.log(countEvenOdd([1, 2, 3, 4, 5]));                 // { even: 2, odd: 3 }
console.log(countEvenOdd([10, 20, 30]));                  // { even: 3, odd: 0 }