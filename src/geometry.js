// src/geometry.js

// 2D Geometry Functions

// Square formulas
function squareArea(side) {
    return side ** 2;
}

function squarePerimeter(side) {
    return 4 * side;
}

// Rectangle formulas
function rectangleArea(length, width) {
    return length * width;
}

function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

// Triangle formulas
function triangleArea(base, height) {
    return (base * height) / 2;
}

function trianglePerimeter(a, b, c) {
    return a + b + c;
}

// Trapezoid formulas
function trapezoidArea(b1, b2, height) {
    return (b1 + b2) / 2 * height;
}

function trapezoidPerimeter(a, b, c, d) {
    return a + b + c + d;
}

// Circle formulas
function circleArea(radius) {
    return Math.PI * radius ** 2;
}

function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

// 3D Geometry Functions

// Cube formulas
function cubeVolume(side) {
    return side ** 3;
}

function cubeSurfaceArea(side) {
    return 6 * side ** 2;
}

// Rectangular Prism formulas
function rectangularPrismVolume(length, width, height) {
    return length * width * height;
}

function rectangularPrismSurfaceArea(length, width, height) {
    return 2 * (length * width + width * height + height * length);
}

// Cylinder formulas
function cylinderVolume(radius, height) {
    return Math.PI * radius ** 2 * height;
}

function cylinderSurfaceArea(radius, height) {
    return 2 * Math.PI * radius * (height + radius);
}

// Cone formulas
function coneVolume(radius, height) {
    return (1 / 3) * Math.PI * radius ** 2 * height;
}

function coneSurfaceArea(radius, slantHeight) {
    return Math.PI * radius * (radius + slantHeight);
}

// Sphere formulas
function sphereVolume(radius) {
    return (4 / 3) * Math.PI * radius ** 3;
}

function sphereSurfaceArea(radius) {
    return 4 * Math.PI * radius ** 2;
}

// Exporting all geometry functions
module.exports = {
    // 2D Geometry
    squareArea,
    squarePerimeter,
    rectangleArea,
    rectanglePerimeter,
    triangleArea,
    trianglePerimeter,
    trapezoidArea,
    trapezoidPerimeter,
    circleArea,
    circleCircumference,

    // 3D Geometry
    cubeVolume,
    cubeSurfaceArea,
    rectangularPrismVolume,
    rectangularPrismSurfaceArea,
    cylinderVolume,
    cylinderSurfaceArea,
    coneVolume,
    coneSurfaceArea,
    sphereVolume,
    sphereSurfaceArea,
};
