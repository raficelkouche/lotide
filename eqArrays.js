const eqArrays = function(arrayA, arrayB){
  if (arrayA.length != arrayB.length){
    return false;
  }
  for (let i = 0; i < arrayA.length; i++){
    if(Array.isArray(arrayA[i])) {
       if (!eqArrays(arrayA[i], arrayB[i])) {
         return false;
       }
    } else if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

module.exports = {eqArrays};
