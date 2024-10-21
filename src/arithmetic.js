// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Percentage
function percentage(part, total) {
    return (part / total) * 100;
}

// Average (Mean)
function mean(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Median
function median(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
}

// Mode (Most frequent value)
function mode(numbers) {
    const frequency = {};
    let maxFreq = 0;
    let modes = [];

    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    });

    for (const num in frequency) {
        if (frequency[num] === maxFreq) {
            modes.push(Number(num));
        }
    }

    return modes.length === numbers.length ? [] : modes;
}

const math = {
    add,
    subtract,
    multiply,
    divide,
    percentage,
    mean,
    median,
    mode,
};

module.exports = math;
