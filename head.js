const assertEqual = function(actual, expected) {
  return (actual === expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`;
};

const head = function(array) {
  return array[0];
};
