// src/statistics.js

// Mean
function mean(data) {
    if (!Array.isArray(data) || data.length === 0) return undefined;
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  }
  
  // Standard Deviation
  function standardDeviation(data) {
    if (!Array.isArray(data) || data.length === 0) return undefined;
    const avg = mean(data);
    const variance = data.reduce((acc, val) => acc + (val - avg) ** 2, 0) / data.length;
    return Math.sqrt(variance);
  }
  
  module.exports = { mean, standardDeviation };
  