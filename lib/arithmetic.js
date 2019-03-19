'use strict';

let arithmetic = module.exports = {};

function decideIfNum(number){
  return (typeof number !== 'number');
}

function ifZero(number){
  return (number === 0);
}

arithmetic.add = function(array) {
  if(typeof array !== typeof []){return null;}
  if(array.every(decideIfNum)){return null;}
  return array.reduce((accumulator,current) => {
    return accumulator + current;
  });
};

arithmetic.subtract = function(array) {
  if(typeof array !== typeof []){return null;}
  if(array.every(decideIfNum)){return null;}
  return array.reduce((accumulator,current) => {
    return accumulator - current;
  });
};

arithmetic.multiply = function(array) {
  if(typeof array !== typeof []){return null;}
  if(array.every(decideIfNum)){return null;}
  return array.reduce((accumulator,current) => {
    return accumulator * current;
  });
};

arithmetic.divide = function(array) {
  if(typeof array !== typeof []){return null;}
  if(array.every(decideIfNum)){return null;}
  return array.reduce((accumulator,current) => {
    if(ifZero(current)){return null;}
    return accumulator / current;
  });
};


