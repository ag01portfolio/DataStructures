//leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

/**
 * @param {string} s
 * @return {string}
 */
https: var removeDuplicates = function (s) {
  let stack = [];

  for (let c of s) {
    console.log("c: ", c);
    console.log("stack: ", stack);
    if (stack[stack.length - 1] === c) {
      //   stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
};

console.log(removeDuplicates("azxxzy"));
