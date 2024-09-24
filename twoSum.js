// Google Question
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Two pointer method
  // loop through all the items 0 to n - Pointer 1
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    const p1 = nums[i];
    // console.log("p1 ", p1);
    // loop through all the items 1 to n - Pointer 2
    for (let j = 0; j < l; j++) {
      const p2 = nums[j];
      //   console.log("p2 ", p2);
      if (target == p1 + p2) {
        console.log("found ans", [i, j]);
        return [i, j];
      }
    }
  }
  // P2 + P1 = target
};

twoSum([2, 7, 11, 15], 9);
