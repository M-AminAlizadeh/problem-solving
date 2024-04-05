const twoNumbersSum = function(nums, target) {
    // loop inside the nums array
    // sum each number with the others and compare the result with target (use conditional statement)
    // if there are two numbers return them as an array else return empty one
    // try to solve with while loop and for of
    for (let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
        if(nums[i] + nums[j] === target){
          return [nums[i], nums[j]];
        }
      }
    }
    return [];
};

module.exports = twoNumbersSum;
