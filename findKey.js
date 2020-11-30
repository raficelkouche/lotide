const assertEqual = function (actual, expected) {
  console.log((actual === expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
};
const findKey = function(object, callback) {
  for (let key in object){
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}
module.exports =findKey;
//Testing
const testA = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

const testB = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3);

const testC = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 4);

assertEqual(testA, "noma");
assertEqual(testB, "Akaleri");
assertEqual(testC, undefined);
