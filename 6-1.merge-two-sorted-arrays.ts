/*
 * `Merge Two Sorted Arrays`
 * 
 * Write a function mergeSortedArrays that takes two arrays of numbers, each already sorted in ascending order, 
 * and merges them into a single sorted array.
 * Your solution should take advantage of the fact that both input arrays are already sorted.
 */


function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = new Array(arr1.length + arr2.length);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result[k++] = arr1[i++];
    } else {
      result[k++] = arr2[j++];
    }
  }

  while (i < arr1.length) {
    result[k++] = arr1[i++];
  }

  while (j < arr2.length) {
    result[k++] = arr2[j++];
  }

  return result;
}


console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));               // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));               // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 1, 2], [1, 2, 2]));               // [1, 1, 1, 2, 2, 2]
console.log(mergeSortedArrays([], [1, 2]));                         // [1, 2]
console.log(mergeSortedArrays([], []));                             // []
console.log(mergeSortedArrays([-5, -1, 3], [-3, 0, 4]));            // [-5, -3, -1, 0, 3, 4]