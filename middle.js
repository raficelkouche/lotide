/* [1,2,3,4,5,6] => indx = 3, mid = [3,4] => [indx-1,indx+1]*/
const middle = function(array){
  let indexOfMiddle;

  if (array.length > 2) {
    indexOfMiddle = Math.floor(array.length / 2);
  }
  else {
    return [];
  }

  if (array.length % 2 === 0){
    return array.slice(indexOfMiddle - 1, indexOfMiddle + 1);
  }
  else {
    return array.slice(indexOfMiddle, indexOfMiddle + 1);
  }
}

module.exports = middle;

