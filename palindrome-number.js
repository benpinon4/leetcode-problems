/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let rev =  parseInt(x.toString().split("").reverse().join(""))
//   let reversedInteger1 = parseInt();
//   let splitInteger = intToStr.split("");
//   let reversedIntArr = [];

//   for (let index = splitInteger.length - 1; index > -1; index--) {
//     reversedIntArr = [...reversedIntArr, splitInteger[index]];
//   }
//   let newArr = reversedIntArr.join("");
//   let reversedInteger = parseInt(newArr);

  return x == rev;
};

console.log(isPalindrome(121))
console.log(isPalindrome(1215665165));
