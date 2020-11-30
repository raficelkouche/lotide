const without = function(array,remove){
  let filtered = array.filter(function(elm){
    return remove.includes(elm) ? false: true;
  });
  return filtered;
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
module.exports =without;
assertArraysEqual(without([1,2,3,4,5],[2,5]), [1,3,4]);
assertArraysEqual(without([1, 2, 3, 4, 5], [19]), [1,2,3,4,5]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);