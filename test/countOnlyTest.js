const assert = require('chai').assert;
const {countOnly} = require('../countOnly');

describe("#countOnly", () => {
  it(`returns {Jason: 1, Fang: 2} when passed the following list of names [
  "Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"] and the following
  object dictating to the function which names should be counted 
  {Jason: true, Karima: true, Fang: true, Abouhanna: false}`, () => {
      const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
      ];
      assert.deepEqual({Jason: 1, Fang: 2}, 
        countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }
        ));
  });
});