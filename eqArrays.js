const assertEqual = function (actual, expected) {
  console.log((actual === expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arrayA, arrayB){
  if (arrayA.length != arrayB.length){
    return false;
  }
  for (let i = 0; i < arrayA.length; i++){
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2]), true);