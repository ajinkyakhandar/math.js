// src/algebra.js

// Polynomial addition
function addPolynomials(poly1, poly2) {
    const length = Math.max(poly1.length, poly2.length);
    const result = Array(length).fill(0);
  
    for (let i = 0; i < length; i++) {
      result[i] = (poly1[i] || 0) + (poly2[i] || 0);
    }
    return result;
  }
  
  // Polynomial multiplication
  function multiplyPolynomials(poly1, poly2) {
    const result = Array(poly1.length + poly2.length - 1).fill(0);
  
    for (let i = 0; i < poly1.length; i++) {
      for (let j = 0; j < poly2.length; j++) {
        result[i + j] += poly1[i] * poly2[j];
      }
    }
    return result;
  }
  
  module.exports = { addPolynomials, multiplyPolynomials };
  