/*
 * `Find Second Largest Unique Number`
 * 
 * Given an array of numbers, return the second largest unique number. 
 * If there are fewer than two unique numbers in the array, return null.
 */


function findSecondLargestUnique(numbers) {

  const uniqueNumbers = [...new Set(numbers)];

  if (uniqueNumbers.length < 2) {
    return null;
  }

  uniqueNumbers.sort((a, b) => b - a);

  return uniqueNumbers[1];
}


console.log(findSecondLargestUnique([5, 3, 9, 1, 9, 5]));           // 5
console.log(findSecondLargestUnique([1, 1, 1]));                    // null (only one unique)
console.log(findSecondLargestUnique([7]));                          // null (only one element)
console.log(findSecondLargestUnique([]));                           // null (empty array)
console.log(findSecondLargestUnique([-5, -1, -10]));                // -5 (negative handling)
console.log(findSecondLargestUnique([4, 4, 4, 2]));                 // 2
