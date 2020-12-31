const countOnly = function(allItems, itemsToCount) {
  let results = {};
  
  for (let item of allItems){
    if (itemsToCount[item]){
      results[item] ? results[item]++ : results[item] = 1;
    }
  }
  return results;
};

module.exports = {countOnly};

