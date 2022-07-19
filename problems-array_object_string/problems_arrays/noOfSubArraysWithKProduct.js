const subarraysWithProduct = (arr, n, k) => {
  let start = 0;
  let end = 0;
  let result = 0;
  let onesCount = 0;
  let p = 1;

  while (end < n) {
    p = p * arr[end];
    // reduce the window and increment start
    if (p > k) {
      while (start < end) {
        p = p / arr[start];
        start += 1;
      }
    }
    // checks if there is 1 after we found the product
    if (p === k) {
      onesCount = 0;
      // checking for 1 in (end + 1)
      while (end + 1 < n && arr[end + 1] === 1) {
        onesCount += 1;
        end += 1;
      }
      result += onesCount + 1;
      // checking for 1 in start position
      while (start <= end && arr[start] === 1) {
        result += onesCount + 1;
        start += 1;
      }
      p = p / arr[start];
      start += 1;
    }
    end += 1;
  }
  return result;
};

const array = [1, 1, 2, 3, 4, 1, 1];
const size = array.length;
const prod = 24;
console.log(subarraysWithProduct(array, size, prod));
