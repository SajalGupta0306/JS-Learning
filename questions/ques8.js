// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const nums = [3, 2, 4];
const target = 6;
let ans = [];

// function twoSum(arr, value) {
//   const temp = {};
//   if (arr.length === 0) {
//     return ans;
//   }
//   arr.forEach((a, index) => {
//     if (a <= value) {
//       temp[index] = a;
//     }
//   });

//   let keys = Object.keys(arr);
//   let remainder = value - arr[keys[0]];
//   ans.push(Object.keys(arr)[0]);
//   if (remainder === 0) {
//     return ans;
//   }
//   for (var i = 1; i < keys.length; i++) {
//     if (remainder - arr[keys[i]] === 0) {
//       ans.push(keys[i]);
//     }
//   }

//   return ans;
// }


var twoSum = function (nums, target) {
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];

    if (cache[nums[i]] !== undefined) {
      return [cache[nums[i]], i];
    }
    cache[remaining] = i;
  }
};

console.log(twoSum([...nums], target));
