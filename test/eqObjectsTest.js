const assert = require('chai').assert;
const {eqObjects} = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true when comparing {a: 1, b: 2} and {b: 2, a: 1}", () => {
    assert.deepEqual(true, eqObjects({a: 1, b: 2}, {b: 2, a: 1}));
  });

  it('returns false when comparing {a: 1, b: 2} and {a: "1", b: "2", c: "3"}', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(false, eqObjects(ab, abc));
  });

  it('returns true when comparing objects containing arrays such as {c: "1", d: ["2", 3]} and {d: ["2", 3], c: "1"}', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(true, eqObjects(cd, dc));
  });

  it('returns false when comparing { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] } ', () => {
    const cd = {c: "1", d: ["2", 3]};
    const dc = {c: "1", d: ["2", 3, 4]};
    assert.deepEqual(false, eqObjects(cd, dc));
  });

  it('returns true when comparing nested objects such as { a: { z: 1 }, b: 2 } and { b: 2, a: { z: 1 }}', () => {
    const cd = { a: { z: 1 }, b: 2 };
    const dc = { b: 2, a: { z: 1 }};
    assert.deepEqual(true, eqObjects(cd, dc));
  });

  it('returns false when comparing { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }  ', () => {
    const cd = { a: { y: 0, z: 1 }, b: 2 };
    const dc = { a: 1, b: 2 };
    assert.deepEqual(false, eqObjects(cd, dc));
  });

});