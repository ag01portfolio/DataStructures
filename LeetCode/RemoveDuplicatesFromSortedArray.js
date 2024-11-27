// https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=problem-list-v2&envId=array

let arr = [1, 2, 2, 3];
// let arr2 = [];

// function removeDuplicates(nums) {
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       arr2.push("_");
//       console.log("if True ");
//     } else {
//       arr2.push(nums[i]);
//       console.log("if false ");
//     }
//   }
// }

// r = removeDuplicates(arr);
// console.log("arr2: ", arr2);
// console.log("Res: ", r);

var removeDuplicates = function (nums) {
  let newNumArr = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
    } else {
      newNumArr.push(nums[i]);
    }
  }

  return newNumArr;
};
