/*
 * `Find the Missing Number` 
 * 
 * Given an array nums containing n distinct numbers taken from the range [0, n], 
 * return the only number in the range that is missing from the array. 
 */


function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (const num of nums) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}


console.log(missingNumber([3, 0, 1]));                              // 2
console.log(missingNumber([0, 1, 2]));                              // 3
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));            // 8
console.log(missingNumber([0]));                                    // 1
console.log(missingNumber([1]));                                    // 0