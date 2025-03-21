// A divide-and-conquer algorithm that selects a "pivot" element and partitions the array into two halves: 
// elements less than the pivot and elements greater than the pivot. It then recursively sorts the two halves. 
  
// Time Complexity: 
//   Best Case: O(nlogn) (when the pivot divides the array into two nearly equal halves). 
//   Average Case: O(nlogn). 
//   Worst Case: O(n 2 ) (when the pivot is the smallest or largest element, e.g., already sorted array). 

// Space Complexity: 
//   O(logn) (due to recursion stack). 
  
// Use Case: Efficient for large datasets and widely used in practice. Not stable but can be optimized with a good pivot selection strategy.

const arr = [4, 3, 2, 5, 6, 1, 7, 2, 9, 44, 12, 65];

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
  }

  // we can straightaway do this, instead of below if else if block.
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
  } else {
    return [pivot, ...quickSort(rightArr)];
  }
};

console.log(quickSort(arr));
