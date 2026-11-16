/*
 * `Get Month Name`
 * 
 * Given an integer monthNumber between 1 and 12, return the English name of the corresponding month, with the first letter capitalized.
 */
 

function getMonthName(monthNumber: number): string {
    switch (monthNumber) {
        case 1: return "January"
        case 2: return "February"
        case 3: return "March"
        case 4: return "April"
        case 5: return "May"
        case 6: return "June"
        case 7: return "July"
        case 8: return "August"
        case 9: return "September"
        case 10: return "October"
        case 11: return "November"
        case 12: return "December"

        default: return "Invalid input."
    }
}


console.log(getMonthName(3));               // March
console.log(getMonthName(10));              // October