// src/complex.js

function Complex(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  
  Complex.prototype.add = function (other) {
    return new Complex(this.real + other.real, this.imaginary + other.imaginary);
  };
  
  Complex.prototype.multiply = function (other) {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new Complex(real, imaginary);
  };
  
  Complex.prototype.conjugate = function () {
    return new Complex(this.real, -this.imaginary);
  };
  
  Complex.prototype.magnitude = function () {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  };
  
  module.exports = { Complex };
  