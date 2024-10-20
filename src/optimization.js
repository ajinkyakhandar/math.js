// Basic Gradient Descent Algorithm
function gradientDescent(f, gradF, start, learningRate = 0.01, tolerance = 1e-6, maxIter = 1000) {
    let x = start;
    for (let i = 0; i < maxIter; i++) {
      const grad = gradF(x);
      if (Math.abs(grad) < tolerance) break;
      x -= learningRate * grad;
    }
    return x;
  }
  
  module.exports = { gradientDescent };
  