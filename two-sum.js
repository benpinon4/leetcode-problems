/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let resultArr;
  for (let i = 0; i < nums.length; i++) {
    let otherIndex = nums.findIndex((item) => item == target - nums[i]);
    console.log(otherIndex)
    if (otherIndex != -1 && otherIndex != i) {
      resultArr = [i, otherIndex];
      break;
    }
  }
  return resultArr;
};

console.log(twoSum([1, 5, 12, 13], 25));
console.log(twoSum([44, 5, 98, 11, 7, 97], 141));
console.log(twoSum([3,2,4], 6));
