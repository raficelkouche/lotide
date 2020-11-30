const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([1,2,3,4,5]).shift(), 2);