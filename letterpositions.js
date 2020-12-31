const letterPositions = function(sentence) {
  let result = {};
  let i = 0;
  for (let char of sentence){
    if (char === ' '){
      i++;
      continue;
    }
    result[char] ? result[char].push(i++) : result[char] = [i++];
  }
  return result;
}

module.exports = {letterPositions};

/* 
let testA = letterPositions("hello");
assertArraysEqual(testA["h"], [0]);
assertArraysEqual(testA["e"], [1]);
assertArraysEqual(testA["l"], [2,3]);
assertArraysEqual(testA["o"], [4]); */