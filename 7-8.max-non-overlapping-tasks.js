/*
 * `Max Non-Overlapping Tasks`
 * 
 * Given an array of tasks where each task is represented as [start, finish], 
 * return the maximum number of tasks a single person can complete without any overlapping intervals.
 * 
 * Two tasks overlap if one starts before the other finishes (i.e. start2 < finish1 when start1 <= start2). 
 * However, a task that starts at the exact same time another task finishes (e.g., [1, 3] and [3, 5]) is considered non-overlapping.
 */


function maxTasks(tasks) {
    const sorted = [...tasks].sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    let count = 0;
    let lastFinish = -Infinity;

    for (const [start, finish] of sorted) {
        if (start >= lastFinish) {
            count++;
            lastFinish = finish;
        }
    }

    return count;
}


console.log(maxTasks([[1, 3], [2, 4], [3, 5]]));                                            // 2        ([1,3] & [3,5])
console.log(maxTasks([[1, 3], [3, 5], [5, 7]]));                                            // 3        (touching > no overlap)
console.log(maxTasks([[1, 10], [2, 3], [4, 5], [6, 7]]));                                   // 3
console.log(maxTasks([[1, 2], [1, 2], [1, 2]]));                                            // 1        (same repeated task)
console.log(maxTasks([]));                                                                  // 0
console.log(maxTasks([[-5, -1], [-1, 2], [0, 3]]));                                         // 2        (negative time)