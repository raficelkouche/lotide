const map = function(array, callback) {
  const results = [];

  for (let item of array){
    results.push(callback(item));
  }
  return results;
}
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

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t']);