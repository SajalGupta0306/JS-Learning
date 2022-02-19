// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const isMaxSum = (testArr) => {
  let test = 0;
  testArr.forEach((elem) => {
    test += elem;
  });
  return test;
};
const maxPalindromes = (arr) => {
  let sum = 0;
  let testArr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (i === j - i + 1) {
        testArr = arr.slice(i);
      } else {
        testArr = arr.slice(i, j - i + 1);
      }
      const maxSum = isMaxSum(testArr);
      if (sum < maxSum) {
        sum = maxSum;
      }
    }
  }
  return sum;
};

// var maxSubArray = function (nums) {
//   let max = nums[0];
//   let sum = 0;

//   for (let num of nums) {
//     if (sum < 0) {
//       sum = 0;
//     }
//     sum += num;
//     max = Math.max(sum, max);
//   }
//   return max;
// };

// console.log(maxPalindromes(nums));
console.log(maxSubArray(nums));
