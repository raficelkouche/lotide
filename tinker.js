const myFn = function () {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);
console.log(myFn);
console.log(Object.keys(myFn));

function runner(f) {
  f();
}

runner(myFn);