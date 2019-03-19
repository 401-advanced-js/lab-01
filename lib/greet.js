'use strict';

const greet = function(string){
  if(typeof string !== 'string'){return null;}
  return `hello ${string}`;
};

module.exports = greet;
