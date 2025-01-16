/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const removeBackSpace = (p) => {
    let removedSB = [];

    for (let i = 0; i < p.length; i++) {
      pArray = [...p];

      if (pArray[i] == "#") {
        removedSB.pop();

        console.log(">>> Not Doing anyting  - pArray[i]", pArray[i]);
      } else {
        removedSB.push(pArray[i]);
        console.log(">>> Add element  - pArray[i]", pArray[i]);
      }
      console.log(">>    removedSB]", removedSB);
    }

    return removedSB.join("");
  };
  return removeBackSpace(s) == removeBackSpace(t);
};
console.log("Final ==>>> ", backspaceCompare("ab#c", "ad#c"));

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var backspaceCompare = function (s, t) {
//   // Common method for s and t
//   const removeBackSpace = (p) => {
//     // converte s to array

//     let arrayP = [...p];
//     console.log("==>> arrayP", arrayP);
//     let withoutBackSpace = [];
//     for (let i = arrayP.length; i >= 0; i--) {
//       console.log("arrayP[i]: ", arrayP[i], arrayP[i] == "#");

//       if (arrayP[i] == "#") {
//         console.log("Remove");
//       } else {
//         withoutBackSpace.push(arrayP[i]);
//       }
//       console.log("withoutBackSpace 2 : ", withoutBackSpace);
//     }
//     return withoutBackSpace;
//   };

//   // // solve string s
//   // // solve string t
//   // console.log(" removeBackSpace(s1): ", removeBackSpace(s));

//   const result1 = removeBackSpace(s);
//   const result2 = removeBackSpace(t);
//   console.log(" removeBackSpace(s1): ", result1, result2, (result1 = result2));

//   // // Return true if they are equal else false
//   // return (result1 = result2);
// };
// console.log("Final ==>>> ", backspaceCompare("ab#c", "ad#c"));
