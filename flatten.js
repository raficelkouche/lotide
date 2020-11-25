const flatten = function(array) {
  let output = [];
  for (let elm of array){
    if (Array.isArray(elm)){
      for (let i of elm){
        output.push(i);
      }
    }
    else {
      output.push(elm);
    }
  }
  return output;
};

const assertArraysEqual = function (arrayA, arrayB) {
  console.log((eqArrays(arrayA, arrayB)) ? `✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}` :
    `🛑🛑🛑  Assertion Failed: ${arrayA} !== ${arrayB}`);
};

const eqArrays = function (arrayA, arrayB) {
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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);