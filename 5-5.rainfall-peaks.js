/*
 * `Rainfall Peaks` 
 * 
 * Given an array of daily rainfall measurements, find all the "peak" days.
 * A day is considered a peak if its rainfall is strictly higher than both its immediate left (previous day) and right (next day) neighbors.
 * Because the first and last days do not have both neighbors, they can never be peaks.
 * Return an array of the 1-based day numbers (i.e., the first day is day 1, the second is day 2, etc.) that are peaks, in chronological order.
 */


function findRainfallPeaks(rainfall) {
    const peaks = [];

    for (let i = 1; i < rainfall.length - 1; i++) {

        if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
            peaks.push(i + 1);
        }
    }

    return peaks;
}


console.log(findRainfallPeaks([1, 3, 2, 5, 1, 4, 2]));                       // [2, 4, 6]
console.log(findRainfallPeaks([1, 2, 3, 4, 5]));                             // [] (increasing)
console.log(findRainfallPeaks([5, 4, 3, 2, 1]));                             // [] (decreasing)
console.log(findRainfallPeaks([1, 5, 1]));                                   // [2]
console.log(findRainfallPeaks([]));                                          // [] (empty array)
console.log(findRainfallPeaks([5]));                                         // [] (single value)
console.log(findRainfallPeaks([5, 3]));                                      // [] (only two elements)
console.log(findRainfallPeaks([3, 3, 3]));                                   // [] (equal!)
