// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let s1 = s.split("");
  let s2 = [];
  // Prepare t
  for (let i = 0; i < s1.length; i++) {
    console.log("s1[i]", s1[i], s2);
    if (s1[i] !== "#") {
      console.log("IF = 1 ===i]", s1);
      s2.push(s1[i]);
    } else {
      s2.pop();
      console.log("IF el= 1 ===i]", s1);
    }
  }
  console.log("s1[======= 1 ===i]", s1);

  let t1 = t.split("");
  let t2 = [];
  // Prepare t
  for (let j = 0; j < t1.length; j++) {
    if (t1[j] == "#") {
      t2.pop();
    } else {
      t2.push(t1[j]);
    }
  }

  let s3 = s2.join("");
  let t3 = t2.join("");
  console.log("[======= T ===i]", t3);
  console.log("[======= S ===i]", s3);
  console.log("[======= S = s2 == tt2==i]", s3 == t3);

  return s3 == t3;
};

console.log("s1[=====opppp== 1 ===i]", backspaceCompare("ab#c", "ad#c"));
