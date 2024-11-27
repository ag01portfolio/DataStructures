// var isPalindrome = function (x) {
//   console.log("x: ", x);
//   let y = x;
//   console.log("1 y: ", y);

//   let a = y.reverseString;
//   console.log("2 y: ", y);
//   console.log("2 a: ", a);
//   if ((x = y)) {
//     return ture;
//   } else {
//     return false;
//   }
// };

// isPalindrome(234);

// let str1 = ["a", "b", "c", "d"];
let str1 = "abcd";

let x = str1;
let rx = x;
console.log(rx);

let res = rx.split("").reverse().join("");
console.log(res);
if ((x = rx)) {
  return true;
} else {
  return false;
}
