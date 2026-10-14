/*
 * `Longest Increasing Streak`
 * 
 * Given an array of numbers, return the length of the longest contiguous streak in which 
 * each number is strictly greater than the previous number.
 * 
 * If the input array is empty, return 0.
 */


function longestIncreasingStreak(nums) {
    if (nums.length === 0) return 0;

    let best = 1;
    let current = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            current++;
        } else {
            current = 1;
        }

        if (current > best) {
            best = current;
        }
    }

    return best;
}


console.log(longestIncreasingStreak([1, 2, 3, 1, 2]));                      // 3
console.log(longestIncreasingStreak([5, 4, 3, 2, 1]));                      // 1
console.log(longestIncreasingStreak([1, 1, 1]));                            // 1 (Not strictly greater)
console.log(longestIncreasingStreak([]));                                   // 0
console.log(longestIncreasingStreak([7]));                                  // 1
console.log(longestIncreasingStreak([1, 2, 3, 4, 5]));                      // 5
console.log(longestIncreasingStreak([-3, -2, -1, 0]));                      // 4
console.log(longestIncreasingStreak([1, 3, 2, 4, 5, 6]));                   // 4