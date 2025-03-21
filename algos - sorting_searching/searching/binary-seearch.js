// Works on sorted arrays. Repeatedly divides the array into two halves and compares the middle element with the target. 
// If the middle element is not the target, it narrows the search to the left or right half. 
  
// Time Complexity: 
//   Best Case: O(1) (when the target is the middle element). 
//   Average Case: O(logn).  because whenever array is split into half and opeartion performed, it becomes log n
//   Worst Case: O(logn). 

// Space Complexity: 
//   Iterative Implementation: O(1). 
//   Recursive Implementation: O(logn) (due to recursion stack). 

// Use Case: Efficient for large, sorted datasets. Not suitable for unsorted data.

const arr = [1, 2, 3, 4, 5, 8];

const binarySearch = (elem, arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (elem === arr[middle]) {
      return middle;
    } else if (elem < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};


// recursive approach
const recursiveBinarySearch = (arr, elem) => {
  return searchArr(arr, elem, 0, arr.length - 1)
}

const searchArr = (arr, elem, leftIdx, rightIdx) => {
  if (leftIdx > rightIdx) {
    return "Element Not FOund."
  }
  const mid = Math.floor((leftIdx + rightIdx) / 2)
  if (arr[mid] === elem) {
    return `Element FOund at position: ${mid + 1}`
  }
  if (elem < arr[mid]) {
    return searchArr(arr, elem, leftIdx, mid - 1)
  } else {
    return searchArr(arr, elem, mid + 1, rightIdx)
  }
}

console.log(binarySearch(5, arr));
