// test/geometry.test.js
const math = require('../src');

describe('2D Geometry tests', () => {
    // Square tests
    test('calculates area of a square with side 4 to equal 16', () => {
        expect(math.squareArea(4)).toBe(16);
    });
    // Add more 2D tests here

    // Circle tests
    test('calculates area of a circle with radius 3 to equal approximately 28.27', () => {
        expect(math.circleArea(3)).toBeCloseTo(28.27, 2);
    });
});

describe('3D Geometry tests', () => {
    // Cube tests
    test('calculates volume of a cube with side 3 to equal 27', () => {
        expect(math.cubeVolume(3)).toBe(27);
    });
    // Rectangular Prism tests
    test('calculates volume of a rectangular prism with dimensions 2, 3, 4 to equal 24', () => {
        expect(math.rectangularPrismVolume(2, 3, 4)).toBe(24);
    });
    // Add more 3D tests here

    // Sphere tests
    test('calculates volume of a sphere with radius 3 to equal approximately 113.10', () => {
        expect(math.sphereVolume(3)).toBeCloseTo(113.10, 2);
    });
});
