const letterPositions = function(sentence) {
  let result = {};
  let i = 0;
  for (let char of sentence){
    if (char === ' '){
      i++;
      continue;
    }
    result[char] ? result[char].push(i++) : result[char] = [i++];
  }
  return result;
}
const assertArraysEqual = function(arrayA, arrayB) {
  console.log((eqArrays(arrayA, arrayB)) ? `✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}` :
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

let testA = letterPositions("hello");
assertArraysEqual(testA["h"], [0]);
assertArraysEqual(testA["e"], [1]);
assertArraysEqual(testA["l"], [2,3]);
assertArraysEqual(testA["o"], [4]);