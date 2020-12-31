const {eqArrays} = require("./eqArrays");

const eqObjects = function(objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length){
    return false;
  }

  for (let key in objA){
    if (Array.isArray(objA[key])){
      if (!eqArrays(objA[key], objB[key])){
        return false;
      }
    } else if (typeof objA[key] === 'object') {
        return eqObjects(objA[key], objB[key])
    } else {
      if (objA[key] !== objB[key]){
        return false;
      }
    }
  };

return true;

};

module.exports ={eqObjects};
