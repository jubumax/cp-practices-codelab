/*
 * `Calculate Days Between Dates`
 * 
 * Write a function daysBetweenDates that calculates the absolute number of whole days between 
 * two calendar dates given in YYYY-MM-DD format.
 * The calculation must accurately account for varying month lengths and leap years. 
 * The dates can be provided in any order.
 */


function daysBetweenDates(date1, date2) {
    const toUTC = (str) => {
        const [y, m, d] = str.split("-").map(Number);
        return Date.UTC(y, m - 1, d);
    };

    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    const diff = Math.abs(toUTC(date1) - toUTC(date2));

    return Math.round(diff / MS_PER_DAY);
}


console.log(daysBetweenDates("2024-01-01", "2024-01-31"));                          // 30
console.log(daysBetweenDates("2024-01-31", "2024-01-01"));                          // 30 (order not important)
console.log(daysBetweenDates("2024-02-28", "2024-03-01"));                          // 2 (leap year)
console.log(daysBetweenDates("2023-02-28", "2023-03-01"));                          // 1 (non-leap year)
console.log(daysBetweenDates("2024-05-05", "2024-05-05"));                          // 0
console.log(daysBetweenDates("1970-01-01", "2099-12-31"));                          // 47481
console.log(daysBetweenDates("1999-12-31", "2000-01-01"));                          // 1