const assert = require('chai').assert;
const {eqArrays} = require('../eqArrays');

describe("#eqArrays", () => {
  it('returns true when comparing [1,"2",3] and [1,"2",3]', () => {
    assert.equal(true, eqArrays([1,"2",3], [1,"2",3]))
  });

  it('returns false when comparing [1,"2",3] and [1,2,3]', () => {
    assert.equal(false, eqArrays([1, "2", 3], [1, 2, 3]))
  });

});