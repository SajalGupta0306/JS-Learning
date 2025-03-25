var longestPalindrome = function (s) {
  let len = s.length;
  while (len > 0) {
    for (let i = 0; i < s.length - len + 1; i++) {
      const str = s.slice(i, i + len);
      if (isPalindrome(str)) {
        return str;
      }
    }
    len--;
  }
  return "";
};

const isPalindrome = function (arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(longestPalindrome("Geeks"));
