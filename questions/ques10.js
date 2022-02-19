// Product of Array Except Self

const nums = [1, 2, 3, 4];

// 1  2  3  4
// left    1  1  2  6
// right   24 12 4  1

var productExceptSelf = function (nums) {
  const left = new Array(nums.length).fill(0);
  left[0] = 1;

  const right = new Array(nums.length).fill(0);
  right[right.length - 1] = 1;

  for (let i = 1; i < left.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let i = right.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i];
  }

  return nums;
};

console.log(productExceptSelf(nums));
