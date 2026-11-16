/*
 * `Find Free Time Intervals`
 * 
 * Given a list of booked time intervals and a working-day time range, 
 * return all available time intervals when no booking exists. 
 * All time values are numbers representing points in time (e.g., minutes from midnight).
 * 
 * Booked intervals may overlap with each other or extend beyond the working hours. 
 * The output should be a list of non-overlapping intervals, sorted by their start times.
 */


function findFreeTime(bookedIntervals, workingHours) {
    const [workStart, workEnd] = workingHours;

    const sorted = [...bookedIntervals].sort((a, b) => a[0] - b[0]);

    const free = [];
    let cursor = workStart;

    for (const [start, end] of sorted) {
        if (start > cursor) {
            const gapEnd = Math.min(start, workEnd);
            if (gapEnd > cursor) {
                free.push([cursor, gapEnd]);
            }
        }
        cursor = Math.max(cursor, end);

        if (cursor >= workEnd) break;
    }

    if (cursor < workEnd) {
        free.push([cursor, workEnd]);
    }

    return free;
}


console.log(findFreeTime([[10, 12], [14, 16]], [9, 17]));                           // [[9, 10], [12, 14], [16, 17]]
console.log(findFreeTime([[10, 14], [12, 16]], [9, 17]));                           // [[9, 10], [16, 17]]  (overlap merges)
console.log(findFreeTime([[0, 8], [18, 24]], [9, 17]));                             // [[9, 17]]            (booking outside of working hours)
console.log(findFreeTime([], [9, 17]));                                             // [[9, 17]]
console.log(findFreeTime([[8, 18]], [9, 17]));                                      // []                   (full time booked)
console.log(findFreeTime([[9, 12], [12, 17]], [9, 17]));                            // []                   (continuous booking, has no gap)
console.log(findFreeTime([[10, 11], [10, 15], [11, 12]], [9, 17]));                 // [[9, 10], [15, 17]]  (same start)