// src/index.js

const { factorial } = require('./factorial');
const { gcd, lcm } = require('./gcd-lcm');
const { multiplyMatrices, matrixPower } = require('./matrix');
const { primeFactors, sieve } = require('./prime');
const { nCr, nPr } = require('./combinatorics');
const { trapezoidal } = require('./calculus');
const { Complex } = require('./complex');
const { gradientDescent } = require('./optimization');

module.exports = {
  factorial,
  gcd,
  lcm,
  multiplyMatrices,
  matrixPower,
  primeFactors,
  sieve,
  nCr,
  nPr,
  trapezoidal,
  Complex,
  gradientDescent
};
