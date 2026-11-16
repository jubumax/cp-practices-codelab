/*
 * `Find Balanced Split Index`
 * 
 * Given an array of numbers nums, find the first 0-based index i (where 0 <= i < nums.length - 1) such that 
 * the sum of elements from index 0 to i (inclusive) equals the sum of elements from index i + 1 to the end of the array.
 * 
 * If such an index exists, return i. If no valid split exists, return -1. Both halves must contain at least one element.
 */


function findBalancedSplit(nums: number[]): number {
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  let leftSum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];

    if (leftSum === total - leftSum) {
      return i;
    }
  }

  return -1;
}


console.log(findBalancedSplit([1, 2, 3, 6]));               // 2 (1+2+3 = 6)
console.log(findBalancedSplit([0, 0, 0]));                  // 0 (first index)
console.log(findBalancedSplit([1, 2, 3]));                  // 1
console.log(findBalancedSplit([5, 5]));                     // 0
console.log(findBalancedSplit([1, 2, 3, 4]));               // -1
console.log(findBalancedSplit([]));                         // -1
console.log(findBalancedSplit([7]));                        // -1
console.log(findBalancedSplit([-1, 1, 0]));                 // 1 ([-1, 1] = 0, [0] = 0)