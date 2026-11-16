/*
 * `Find Majority Element`
 * 
 * Given an array of numbers, find the majority element. 
 * The majority element is defined as the element that appears more than n / 2 times, 
 * where n is the array's length. If no such element exists, return null.
 */


function findMajorityElement(nums) {

    let candidate = null;
    let count = 0;

    for (const num of nums) {

        if (count === 0) {
            candidate = num;
        }

        count += num === candidate ? 1 : -1;
    }

    let occurrences = 0;

    for (const num of nums) {
        if (num === candidate) occurrences++;
    }

    return occurrences > nums.length / 2 ? candidate : null;

}


console.log(findMajorityElement([3, 2, 3]));                                // 3
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2]));                    // 2
console.log(findMajorityElement([1, 2, 3]));                                // null
console.log(findMajorityElement([]));                                       // null
console.log(findMajorityElement([5]));                                      // 5
console.log(findMajorityElement([1, 1, 2, 2]));                             // null (majority is more than n / 2 times)
console.log(findMajorityElement([0, 0, 1]));                                // 0 (though 0 is falsy)