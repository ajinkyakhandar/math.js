// src/linear-algebra.js

// Determinant of a matrix
function determinant(matrix) {
    if (matrix.length === 1) return matrix[0][0];
    if (matrix.length === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  
    let det = 0;
    for (let i = 0; i < matrix[0].length; i++) {
      const subMatrix = matrix.slice(1).map(row => row.filter((_, index) => index !== i));
      det += (i % 2 === 0 ? 1 : -1) * matrix[0][i] * determinant(subMatrix);
    }
    return det;
  }
  
  // Inverse of a matrix
  function inverse(matrix) {
    const det = determinant(matrix);
    if (det === 0) throw new Error("Matrix is singular and cannot be inverted");
  
    const size = matrix.length;
    const adjugate = Array.from({ length: size }, () => Array(size).fill(0));
  
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const subMatrix = matrix
          .filter((_, row) => row !== i)
          .map(row => row.filter((_, col) => col !== j));
        adjugate[j][i] = (i + j) % 2 === 0 ? determinant(subMatrix) : -determinant(subMatrix);
      }
    }
    return adjugate.map(row => row.map(value => value / det));
  }
  
  module.exports = { determinant, inverse };
  