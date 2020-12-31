const assert = require('chai').assert;
const {countLetters} = require('../countLetters');

describe("#countLetters", () => {
  it("returns {L: 2, H: 1} for 'LHL'", () => {
    assert.deepEqual({L: 2, H: 1}, countLetters("LHL"))
  });

  it("returns {} for an empty string", () => {
    assert.deepEqual({}, countLetters(""))
  });
});