// https://leetcode.com/problems/search-insert-position/?envType=problem-list-v2&envId=array

console.log("");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let k = -1;
  let foundTarget = false;

  if (!foundTarget) {
    for (let j = 0; j < nums.length; j++) {
      console.log("For loop j: ", nums[j]);

      //   if (nums[j] < target) {
      if (target > nums[j + 1]) {
        // if (nums[j] < target && target > nums[j + 1]) {
        console.log("if");
      }
    }
  }
};

searchInsert([1, 3, 5, 6], 5);
