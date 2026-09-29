/*
 * `What Day Is It?` 
 * 
 * Write a function that takes a year, month, and day as numbers and returns the name of the weekday for that date.
 * Note that the month parameter is 1-indexed (1 for January, 2 for February, ..., 12 for December).
 */


interface Student {
  name: string;
  marks: number;
}

interface GradeBands {
  A: Student[];
  B: Student[];
  C: Student[];
  F: Student[];
}

function groupStudentsByGradeBand(students: Student[]): GradeBands {
  const result: GradeBands = { A: [], B: [], C: [], F: [] };

  for (const student of students) {
    const { marks } = student;

    if (marks >= 80) {
      result.A.push(student);
    } else if (marks >= 70) {
      result.B.push(student);
    } else if (marks >= 60) {
      result.C.push(student);
    } else {
      result.F.push(student);
    }
  }

  return result;
}


console.log(groupStudentsByGradeBand([]));                                  // { A: [], B: [], C: [], F: [] }
console.log(groupStudentsByGradeBand([{ name: "Eve", marks: 80 }]));        // { A: [{ name: "Eve", marks: 80 }], B: [], C: [], F: [] }
console.log(groupStudentsByGradeBand([{ name: "Frank", marks: 0 }, { name: "Grace", marks: 100 }]));
// { A: [{ name: "Grace", marks: 100 }], B: [], C: [], F: [{ name: "Frank", marks: 0 }] }