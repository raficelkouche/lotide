const flatten = function(array) {
  let output = [];
  for (let elm of array){
    if (Array.isArray(elm)){
      for (let i of elm){
        output.push(i);
      }
    } else {
      output.push(elm);
    }
  };
  return output;
};

module.exports = {flatten};

