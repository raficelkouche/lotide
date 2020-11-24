const assertEqual = function(actual, expected) {
  return (actual === expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`;
};

const tail = function(array) {
  return array.slice(1);
};

const result = tail([1,2,3,4]);

console.log(assertEqual(2, result[[0]]));