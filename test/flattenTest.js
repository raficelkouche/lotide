const assert = require('chai').assert;
const {flatten} = require('../flatten');

describe("#flatten", () => {
  it("returns a 1D array containing all the nested elements of an n-Dimensional array", () => {
    const a = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual([1,2,3,4,5,6], flatten(a))
  });

  it("returns an empty array if an empty array is passed as an argument", () => {
    assert.deepEqual([], flatten([]));
  });
});