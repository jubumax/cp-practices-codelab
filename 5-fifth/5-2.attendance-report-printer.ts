/*
 * `Attendance Report Printer` 
 * 
 * Given an array of student attendance records, generate a formatted report string for each student. 
 * 
 * Each student record is an object with the following properties:
 * name (string): The student's name.
 * present (number): The number of sessions attended.
 * total (number): The total number of sessions.
 * 
 * For each student:
 * 1. Calculate their attendance percentage rounded to the nearest integer using Math.round((present / total) * 100).
 * 2. Determine their status based on this rounded percentage:
 *    90% and above: "Excellent"
 *    75% through 89%: "Good"
 *    Below 75%: "At Risk"
 * 3. Format the result as "<name>: <present>/<total> (<percentage>%) - <status>".
 * 
 * Return an array of these formatted strings in the same order as the input.
 */


interface Student {
  name: string;
  present: number;
  total: number;
}

function formatAttendanceReport(students: Student[]): string[] {
  return students.map(student => {
    const { name, present, total } = student;

    const percentage = Math.round((present / total) * 100);

    let status: string;
    if (percentage >= 90) {
      status = "Excellent";
    } else if (percentage >= 75) {
      status = "Good";
    } else {
      status = "At Risk";
    }

    return `${name}: ${present}/${total} (${percentage}%) - ${status}`;
  });
}


console.log(formatAttendanceReport([
  { name: "Alice", present: 18, total: 20 },
  { name: "Bob", present: 15, total: 20 },
  { name: "Charlie", present: 10, total: 20 },
]));
// [
//   "Alice: 18/20 (90%) - Excellent",
//   "Bob: 15/20 (75%) - Good",
//   "Charlie: 10/20 (50%) - At Risk"
// ]

console.log(formatAttendanceReport([]));                                                        // []
console.log(formatAttendanceReport([{ name: "Dave", present: 0, total: 10 }]));                 // ["Dave: 0/10 (0%) - At Risk"]
console.log(formatAttendanceReport([{ name: "Eve", present: 10, total: 10 }]));                 // ["Eve: 10/10 (100%) - Excellent"]