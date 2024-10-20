const { factorial } = require('./factorial'); // Import the factorial function

// Binomial coefficient (nCr)
function nCr(n, r) {
  if (r > n || r < 0) return 0;
  return factorial(n) / (factorial(r) * factorial(n - r));
}

// Permutations (nPr)
function nPr(n, r) {
  if (r > n || r < 0) return 0;
  return factorial(n) / factorial(n - r);
}

module.exports = { nCr, nPr };
