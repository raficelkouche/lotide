const assertArraysEqual = function(arrayA, arrayB) {
  console.log((eqArrays(arrayA,arrayB)) ? `✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}` :
    `🛑🛑🛑  Assertion Failed: ${arrayA} !== ${arrayB}`);
};
const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1,2,"3"],[1,2,3]);