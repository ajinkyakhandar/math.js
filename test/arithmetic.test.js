// test/arithmetic.test.js
const math = require('../src/arithmetic');

// Addition tests
test('adds 5 + 3 to equal 8', () => {
    expect(math.add(5, 3)).toBe(8);
});

test('adds -2 + 2 to equal 0', () => {
    expect(math.add(-2, 2)).toBe(0);
});

// Subtraction tests
test('subtracts 8 - 3 to equal 5', () => {
    expect(math.subtract(8, 3)).toBe(5);
});

test('subtracts 0 - 5 to equal -5', () => {
    expect(math.subtract(0, 5)).toBe(-5);
});

// Multiplication tests
test('multiplies 4 * 6 to equal 24', () => {
    expect(math.multiply(4, 6)).toBe(24);
});

test('multiplies 0 * 5 to equal 0', () => {
    expect(math.multiply(0, 5)).toBe(0);
});

// Division tests
test('divides 12 / 4 to equal 3', () => {
    expect(math.divide(12, 4)).toBe(3);
});

test('throws error when dividing by 0', () => {
    expect(() => math.divide(5, 0)).toThrow('Division by zero is not allowed');
});

// Percentage tests
test('percentage of 30 out of 150 is 20%', () => {
    expect(math.percentage(30, 150)).toBe(20);
});

// Mean (Average) tests
test('calculates mean of [1, 2, 3, 4, 5] to equal 3', () => {
    expect(math.mean([1, 2, 3, 4, 5])).toBe(3);
});

// Median tests
test('calculates median of [1, 3, 3, 6, 7, 8, 9] to equal 6', () => {
    expect(math.median([1, 3, 3, 6, 7, 8, 9])).toBe(6);
});

test('calculates median of [1, 2, 3, 4] to equal 2.5', () => {
    expect(math.median([1, 2, 3, 4])).toBe(2.5);
});

// Mode tests
test('calculates mode of [1, 2, 2, 3, 3, 3, 4] to equal [3]', () => {
    expect(math.mode([1, 2, 2, 3, 3, 3, 4])).toEqual([3]);
});

test('returns an empty array for [1, 2, 3] (no mode)', () => {
    expect(math.mode([1, 2, 3])).toEqual([]);
});
