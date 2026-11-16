/*
 * `Next Greater Element`
 * 
 * Write a function nextGreaterElement that takes an array of numbers nums and returns a new array where 
 * each element at index i is replaced by the first greater element appearing to its right in nums. 
 * If no element to the right is strictly greater than nums[i], use -1 instead.
 */


function nextGreaterElement(nums) {

    const result = new Array(nums.length).fill(-1);
    const stack = [];

    for (let i = 0; i < nums.length; i++) {

        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
            const idx = stack.pop();
            result[idx] = nums[i];
        }

        stack.push(i);
    }

    return result;
}


console.log(nextGreaterElement([2, 1, 2, 4, 3]));               // [4, 2, 4, -1, -1]
console.log(nextGreaterElement([4, 3, 2, 1]));                  // [-1, -1, -1, -1]
console.log(nextGreaterElement([1, 2, 3, 4]));                  // [2, 3, 4, -1]
console.log(nextGreaterElement([2, 2, 2]));                     // [-1, -1, -1]
console.log(nextGreaterElement([5]));                           // [-1]
console.log(nextGreaterElement([]));                            // []