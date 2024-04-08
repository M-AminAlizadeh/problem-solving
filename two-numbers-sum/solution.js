const twoNumbersSum = function(nums, target) {
  /* First Solution: solve with 2 loops
    1. Loop inside the nums array to get each number
    2. Loop inside the first loop to access other number of the arry
    3. Use conditional statement (sum each number with the others and compare the result with target)
    4. Return the result base on the condition
    ---
    Time complexity: O(n^2)
    space complexity: O(n^2)
  */  
   for (let i = 0; i < nums.length; i++) {
     for(let j = i + 1; j < nums.length; j++) {
       if(nums[i] + nums[j] === target){
         return [nums[i], nums[j]];
        }
      }
    }
    return [];
    
  /* Second Solution: solve with hash table
    1. 
    2. 
    3. 
    4. 
    ---
    Time complexity: O(n)
    space complexity: O(n)
  */
};

module.exports = twoNumbersSum;
