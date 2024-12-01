console.log("");

var removeElement = function (nums, val) {
  let k = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      console.log("k", k);
      console.log("k[i]: ", k[i]);

      console.log("k++  :", k);
      k = nums[i];
      k;
      console.log("k[i]", k[i]);
    }
  }

  console.log("Final k ===> ", k);

  return k + 1;
};

removeElement([3, 2, 2, 3], 3);
