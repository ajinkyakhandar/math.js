const math = require('../src/index');

console.log('Factorial of 5:', math.factorial(5)); // 120
console.log('GCD of 12 and 18:', math.gcd(12, 18)); // 6
console.log('LCM of 12 and 18:', math.lcm(12, 18)); // 36
console.log('Prime factors of 60:', math.primeFactors(60)); // [2, 2, 3, 5]
console.log('5C3:', math.nCr(5, 3)); // 10
console.log('Matrix multiplication:', math.multiplyMatrices([[1, 2], [3, 4]], [[2, 0], [1, 2]]));
