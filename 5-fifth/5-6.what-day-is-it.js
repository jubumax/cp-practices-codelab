/*
 * `What Day Is It?` 
 * 
 * Write a function that takes a year, month, and day as numbers and returns the name of the weekday for that date.
 * Note that the month parameter is 1-indexed (1 for January, 2 for February, ..., 12 for December).
 */


function getDayOfWeek(year, month, day) {
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    const date = new Date(year, month - 1, day);

    return dayNames[date.getDay()];
}


console.log(getDayOfWeek(2024, 1, 1));   // "Monday"
console.log(getDayOfWeek(2000, 1, 1));   // "Saturday"
console.log(getDayOfWeek(2024, 2, 29));  // "Thursday" (leap year day)
console.log(getDayOfWeek(1900, 1, 1));   // "Monday"
console.log(getDayOfWeek(2100, 12, 31)); // "Friday"