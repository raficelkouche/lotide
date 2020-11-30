const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayA, arrayB) {
  console.log((eqArrays(arrayA,arrayB)) ? `✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}` :
    `🛑🛑🛑  Assertion Failed: ${arrayA} !== ${arrayB}`);
};

module.exports = assertArraysEqual;
