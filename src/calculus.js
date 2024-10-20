// Numerical integration using Trapezoidal rule
function trapezoidal(f, a, b, n) {
    const h = (b - a) / n;
    let sum = (f(a) + f(b)) / 2;
    for (let i = 1; i < n; i++) {
      sum += f(a + i * h);
    }
    return h * sum;
  }
  
  module.exports = { trapezoidal };
  