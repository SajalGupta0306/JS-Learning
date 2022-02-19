// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const nums = [4, 4];

function containsDuplicate(arr) {
  let store = {};
  arr.forEach((val) => {
    if (!store[val]) {
      store[val] = 1;
    } else {
      store[val]++;
    }
  });
  const values = Object.values(store);
  for (var i = 0; i < values.length; i++) {
    if (values[i] > 1) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate(nums));
