/*
 * `Count Number Properties`
 * 
 * You will be given an array containing exactly five integer values.
 * Your task is to count how many of these values are even, how many are odd, how many are positive, and how many are negative.
 * Return an object with four properties: even, odd, positive, and negative, each holding the respective count.
 * Remember that 0 is considered an even number, but it is neither positive nor negative.
 */


interface CountResult {
  even: number;
  odd: number;
  positive: number;
  negative: number;
}

function countNumberProperties(numbers: number[]): CountResult {
  const result: CountResult = { even: 0, odd: 0, positive: 0, negative: 0 }

  for (const number of numbers) {

    if (number % 2 === 0) {
      result.even++
    } else {
      result.odd++
    }

    if (number > 0) {
      result.positive++
    } else if (number < 0) {
      result.negative++

    }

  }
  return result;
}


console.log(countNumberProperties([-5, 0, 3, -4, 1]));            // { even: 2, odd: 3, positive: 2, negative: 2 }
console.log(countNumberProperties([2, 4, 6, 8, 10]));             // { even: 5, odd: 0, positive: 5, negative: 0 }