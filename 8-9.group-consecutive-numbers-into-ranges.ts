/*
 * `Group Consecutive Numbers into Ranges`
 * 
 * Given an unsorted array of integers, group consecutive numbers into ranges. 
 * The output should be an array of strings, where each string represents a range. 
 * If a range consists of a single number, the string should just be that number. 
 * If it consists of multiple numbers, the string should be in the format 'start-end'.
 */


function groupConsecutiveRanges(nums: number[]): string[] {

  const sorted: number[] = [...new Set(nums)].sort((a, b) => a - b);
  const result: string[] = [];

  let i = 0;

  while (i < sorted.length) {
    const start = sorted[i];
    let end = start;

    while (i + 1 < sorted.length && sorted[i + 1] === end + 1) {
      i++;
      end = sorted[i];
    }

    result.push(start === end ? String(start) : `${start}-${end}`);
    i++;
  }

  return result;
}


console.log(groupConsecutiveRanges([1, 2, 3, 5, 7, 8, 9]));                     // ["1-3", "5", "7-9"]
console.log(groupConsecutiveRanges([5, 1, 3, 2, 4]));                           // ["1-5"]
console.log(groupConsecutiveRanges([-3, -2, -1, 0, 1]));                        // ["-3-1"]
console.log(groupConsecutiveRanges([10, 20, 30]));                              // ["10", "20", "30"]
console.log(groupConsecutiveRanges([-5, -3, -2]));                              // ["-5", "-3--2"]
console.log(groupConsecutiveRanges([]));                                        // []
console.log(groupConsecutiveRanges([4]));                                       // ["4"]