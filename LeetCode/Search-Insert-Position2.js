// https://leetcode.com/problems/search-insert-position/?envType=problem-list-v2&envId=array

console.log("");
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  console.log("Got in");
  let l = 0;
  let r = nums.length;

  while (l <= r) {
    let mid = Math.floor(l + r / 2);

    console.log("mid:", mid, nums[mid], "          r: ", r, "       l", l);

    if (nums[mid] < target) {
      l = mid + 1;
      console.log("if 1");
    } else if (nums[mid] > target) {
      r = mid - 1;
      console.log("if 2");
    } else {
      console.log("Return 1", mid);
      return l;
    }
  }
  console.log("Return 2", l);
  return l;
};

const a = searchInsert([1, 3, 5, 6, 12, 13, 15], 9);

console.log("Ans", a);
