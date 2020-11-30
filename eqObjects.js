const assertEqual = function(actual, expected) {
  console.log((actual === expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length != arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length){
    return false;
  }
  for (let key in objA){
    if (Array.isArray(objA[key])){
      if (!eqArrays(objA[key], objB[key])){
        return false;
      }
    } else {
      if (objA[key] !== objB[key]){
        return false;
      }
    }
  }
return true;
};
module.exports =eqObjects;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd,dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
