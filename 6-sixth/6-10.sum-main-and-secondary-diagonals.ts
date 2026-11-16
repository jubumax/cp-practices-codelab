/*
 * `Sum the Main and Secondary Diagonals`
 * 
 * Given a square 2D array matrix of numbers, write a function diagonalSums that returns 
 * an object containing two properties: main (the sum of elements on the main diagonal) and 
 * secondary (the sum of elements on the secondary diagonal).
 * 
 * The main diagonal runs from the top-left corner to the bottom-right corner (matrix[i][i]). 
 * The secondary diagonal runs from the top-right corner to the bottom-left corner (matrix[i][n - 1 - i]). 
 * If the matrix has odd dimensions, the center element is part of both diagonals and should be included in both sums.
 */


interface DiagonalSums {
  main: number;
  secondary: number;
}

function diagonalSums(matrix: number[][]): DiagonalSums {
  const n = matrix.length;
  let main = 0;
  let secondary = 0;

  for (let i = 0; i < n; i++) {
    main += matrix[i][i];
    secondary += matrix[i][n - 1 - i];
  }

  return { main, secondary };
}


console.log(diagonalSums([[1, 2], [3, 4]]));            // { main: 5, secondary: 5 }
console.log(diagonalSums([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));                                                    // { main: 15, secondary: 15 }
console.log(diagonalSums([[7]]));                       // { main: 7, secondary: 7 }
console.log(diagonalSums([]));                          // { main: 0, secondary: 0 }
console.log(diagonalSums([
  [-1, 0, 5],
  [0, 2, 0],
  [3, 0, -4],
]));                                                    // { main: -3, secondary: 10 }