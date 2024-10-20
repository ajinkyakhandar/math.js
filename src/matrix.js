// Matrix multiplication
function multiplyMatrices(a, b) {
    const rowsA = a.length, colsA = a[0].length;
    const rowsB = b.length, colsB = b[0].length;
    
    if (colsA !== rowsB) {
      throw new Error('Matrix dimensions do not match for multiplication');
    }
    
    const result = Array(rowsA).fill(null).map(() => Array(colsB).fill(0));
    
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        for (let k = 0; k < colsA; k++) {
          result[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    return result;
  }
  
  // Matrix power
  function matrixPower(matrix, power) {
    if (!Array.isArray(matrix) || matrix.length !== matrix[0].length) {
      throw new Error('Input must be a square matrix');
    }
    
    let result = matrix;
    for (let i = 1; i < power; i++) {
      result = multiplyMatrices(result, matrix);
    }
    return result;
  }
  
  module.exports = { multiplyMatrices, matrixPower };
  