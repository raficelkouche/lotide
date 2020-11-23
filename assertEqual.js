const assertEqual = function(actual, expected) {
  return (actual === expected) ? "✅✅✅ Assertion Passed: " + actual + " === " + expected :
    "🛑🛑🛑  Assertion Failed: " + actual + " !== " + expected;
};

console.log(assertEqual("Ligthouse","Bootcamp"));
console.log(assertEqual("WebDev", "WebDev"));
console.log(assertEqual(512, 28));
console.log(assertEqual(256, 256));