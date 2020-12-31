const assert = require('chai').assert;
const { findKey } = require('../findKey');

describe("#findKey", () => {
  const objects = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };
  it("returns the first key that the callback function returns a truthy value for", () => {
    const callback = x => x.stars === 2;
    assert.equal("noma", findKey(objects,callback));
  });

  it("returns undefined if the callback function doesn't return a truthy value for any of the passed keys of a given object", () => {
    const callback = x => x.stars === 20;
    assert.equal(undefined, findKey(objects, callback));
  })
});





/*
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
*/