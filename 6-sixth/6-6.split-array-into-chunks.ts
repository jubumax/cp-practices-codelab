/*
 * `Split Array into Chunks`
 * 
 * Given an array arr and a positive integer size, split the array into consecutive subarrays (chunks) where 
 * each subarray has a length of at most size.
 * 
 * The final chunk may contain fewer elements than size if the array cannot be split evenly. Return all chunks in a new array.
 */


function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}


console.log(chunkArray([1, 2, 3, 4, 5], 2));                     // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4], 2));                        // [[1, 2], [3, 4]]
console.log(chunkArray([1, 2, 3], 5));                           // [[1, 2, 3]]
console.log(chunkArray([1, 2, 3], 1));                           // [[1], [2], [3]]
console.log(chunkArray([], 3));                                  // []
console.log(chunkArray(["a", "b", "c"], 3));                     // [["a", "b", "c"]]