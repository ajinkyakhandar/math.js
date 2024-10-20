// Euclidean algorithm for GCD
function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
  }
  
  // LCM based on GCD
  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }
  
  module.exports = { gcd, lcm };
  