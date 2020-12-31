const assert = require('chai').assert;
const { letterPositions } = require('../letterpositions');

describe("#letterPositions", () => {
  it("returns an object showing the index of every letter in a given string", () => {
    const result = {
      h: [0],
      e: [1],
      l: [2,3],
      o: [4]
    };
    assert.deepEqual(result, letterPositions("hello"));
  });

  it("returns an empty object if an empty string is passed", () => {
    assert.deepEqual({}, letterPositions(""));
  });
});