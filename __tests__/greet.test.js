'use strict';

const greet = require('../lib/greet.js');

describe('Greet proper use should return "hello ${argument}"', () => {
  it('Tests if the argument passed is valid and returns of type string', () => {
    expect(greet('')).toBeTruthy();
  });
  it('If valid string input "mary"', () => {
    expect(greet('mary')).toBe('hello mary');
  });
  it('If world is the input string', () => {
    expect(greet('world')).toBe('hello world');
  });
});
describe('Greet improper use should all return null', () => {
  it('If the argument is a number', () => {
    expect(greet(5)).toBeNull();
  });
  it('If the argument is null', () => {
    expect(greet(null)).toBeNull();
  });
  it('If the argument is a boolean', () => {
    expect(greet(false)).toBeNull();
  });
  it('If the argument is undefined', () => {
    expect(greet(undefined)).toBeNull();
  });
  it('If the argument is an object', () => {
    expect(greet({string:'Lovely'})).toBeNull();
  });
});