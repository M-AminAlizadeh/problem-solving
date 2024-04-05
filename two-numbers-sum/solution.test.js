const twoNumbersSum = require('./solution');

test('Expected',()=>{
  expect(twoNumbersSum([4, 2, 10, 999, 11, -313, 0, -17] , -7)).toStrictEqual([10, -17]);
});
