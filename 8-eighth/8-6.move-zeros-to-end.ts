/*
 * `Move Zeros to End`
 * 
 * Write a function moveZeros that takes an array of numbers and returns a new array with 
 * all 0s moved to the end while maintaining the relative order of all non-zero elements.
 */


function moveZeros(nums: number[]): number[] {

  const nonZeros: number[] = nums.filter(num => num !== 0);
  const zeroCount: number = nums.length - nonZeros.length;

  return nonZeros.concat(new Array<number>(zeroCount).fill(0));
}


console.log(moveZeros([0, 1, 0, 3, 12]));                       // [1, 3, 12, 0, 0]
console.log(moveZeros([1, 2, 3]));                              // [1, 2, 3]
console.log(moveZeros([0, 0, 0]));                              // [0, 0, 0]
console.log(moveZeros([-1, 0, -2, 0, 5]));                      // [-1, -2, 5, 0, 0]
console.log(moveZeros([0]));                                    // [0]
console.log(moveZeros([]));                                     // []