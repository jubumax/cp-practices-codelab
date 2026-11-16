/*
 * `Student Ranking with Ties`
 * 
 * Given an array of student objects, assign competition ranks to each student based on their score and 
 * return a new array of student objects sorted by score in descending order.
 * 
 * Rules:
 * 
 * Students are sorted by score from highest to lowest.
 * If multiple students have equal scores, they receive the same rank, and their original relative order should be preserved.
 * Ranks skip according to the standard competition ranking method (1224 ranking). For example, if two students tie for rank 1, the next student gets rank 3.
 * Each student object in the output should include all original properties plus a rank property.
 */


function rankStudents(students) {
    const sorted = students
        .map((student, index) => ({ student, index }))
        .sort((a, b) => b.student.score - a.student.score || a.index - b.index)
        .map(({ student }) => student);

    const result = [];

    for (let i = 0; i < sorted.length; i++) {
        let rank;
        if (i > 0 && sorted[i].score === sorted[i - 1].score) {
            rank = result[i - 1].rank;
        } else {
            rank = i + 1;
        }
        result.push({ ...sorted[i], rank });
    }

    return result;
}


console.log(rankStudents([
    { name: "A", score: 90 },
    { name: "B", score: 90 },
    { name: "C", score: 80 },
]));
// [
//   { name: "A", score: 90, rank: 1 },
//   { name: "B", score: 90, rank: 1 },
//   { name: "C", score: 80, rank: 3 }
// ]

console.log(rankStudents([
    { name: "X", score: 50 },
    { name: "Y", score: 70 },
    { name: "Z", score: 50 },
]));
// [
//   { name: "Y", score: 70, rank: 1 },
//   { name: "X", score: 50, rank: 2 },
//   { name: "Z", score: 50, rank: 2 }
// ]

console.log(rankStudents([]));
// []