// https://leetcode.com/problems/remove-element/description/?envType=problem-list-v2&envId=array

// 27 Remove Element
console.log("");
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      k++;
    }
  }
  console.log("k, k final: ", k);
  return k;
};

removeElement([3, 2, 2, 2, 5], 3);
