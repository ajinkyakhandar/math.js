// src/prime.js

// Prime factorization
function primeFactors(n) {
    const factors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    if (n > 1) factors.push(n);
    return factors;
  }
  
  // Sieve of Eratosthenes
  function sieve(limit) {
    const sieveArray = Array(limit + 1).fill(true);
    sieveArray[0] = sieveArray[1] = false;
    
    for (let i = 2; i <= Math.sqrt(limit); i++) {
      if (sieveArray[i]) {
        for (let j = i * i; j <= limit; j += i) {
          sieveArray[j] = false;
        }
      }
    }
    
    return sieveArray.map((isPrime, num) => isPrime ? num : null).filter(Boolean);
  }
  
  module.exports = { primeFactors, sieve };
  