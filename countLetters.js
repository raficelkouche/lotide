const assertEqual = function (actual, expected) {
  console.log((actual === expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  string = string.split(" ").join(""); //remove the spaces from the string
  const result = {};

  for (let char of string){
    result[char] ? result[char]++ : result[char] = 1;
  }
  return result;
}
module.exports = countLetters;

//Testing
let testA = countLetters("LHL");
let testB = countLetters("lighthouse in the house");

assertEqual(testA["L"], 2);
assertEqual(testB["h"], 4);
