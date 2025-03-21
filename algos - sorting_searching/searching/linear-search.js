// Iterates through each element in the array or list sequentially until the target element is found.

// Time Complexity:
//   Best Case: O(1) (when the target is the first element).
//   Average Case: O(n).
//   Worst Case: O(n) (when the target is the last element or not present).

// Space Complexity: 
//   O(1) (no additional memory is used).

// Use Case: Suitable for small or unsorted datasets. Simple to implement.

const arr = [1, 2, 3, 4, 5, 8];

const linearSearch = (num, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(4, arr));
