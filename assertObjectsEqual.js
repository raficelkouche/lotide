const eqArrays = function (arrayA, arrayB) {
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

const eqObjects = function (objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }
  for (let key in objA) {
    if (Array.isArray(objA[key])) {
      if (!eqArrays(objA[key], objB[key])) {
        return false;
      }
    } else {
      if (objA[key] !== objB[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(objA, objB){
  const inspect = require('util').inspect;
  console.log((eqObjects(objA, objB)) ? `✅✅✅ Assertion Passed: ${inspect(objA)} === ${inspect(objB)}` :
    `🛑🛑🛑  Assertion Failed: ${inspect(objA)} !== ${inspect(objB)}`);
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab,ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);