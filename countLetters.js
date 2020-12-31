const countLetters = function(string) {
  string = string.split(" ").join(""); //remove the spaces from the string
  const result = {};

  for (let char of string){
    result[char] ? result[char]++ : result[char] = 1;
  }
  return result;
};

module.exports = {countLetters};

