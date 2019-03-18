'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic add functionality', () => {
  it('The add function should return the sum of two number arguments', () => {
    expect(arithmetic.add(2,5)).toBe(7);
  });
  it('The add function should return null if parameters are not numbers', () => {
    expect(arithmetic.add('hello', 'world')).toBeNull();
  });
});

describe('Arithmetic subtract functionality', () => {
  it('The subtract function should return the difference between two numbers',() => {
    expect(arithmetic.subtract(5,2)).toBe(3);
  });
  it('The subtract function should return null if parameters are not numbers', () => {
    expect(arithmetic.subtract('hello', 'world')).toBeNull();
  });
});

describe('Arithmetic multiply functionality', () => {
  it('The multiply function should return the difference between two numbers',() => {
    expect(arithmetic.multiply(3,3)).toBe(9);
  });
  it('The multiply function should return null if parameters are not numbers', () => {
    expect(arithmetic.multiply('hello', 'world')).toBeNull();
  });
});

describe('Arithmetic divide functionality', () => {
  it('The divide function should return the difference between two numbers',() => {
    expect(arithmetic.divide(10,2)).toBe(5);
  });
  it('The divide function should return null if parameters are not numbers', () => {
    expect(arithmetic.divide('hello', 'world')).toBeNull();
  });
  it('The divide function should return null if the divisor is 0', () => {
    expect(arithmetic.divide(5, 0)).toBeNull();
  });
});
