//  Longest Palindromic Substring

const str1 = "abracadabra";

const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return reversed.toLowerCase() === str.toLowerCase();
};
const minWindow = (str1 = "") => {
  let shortestString = null;
  for (let i = 0; i < str1.length; i++) {
    for (let j = i; j < str1.length; j++) {
      const testString = str1.substr(i, j - i + 1);
      if (isPalindrome(testString)) {
        if (
          shortestString === null ||
          testString.length > shortestString.length
        ) {
          shortestString = testString;
        }
      }
    }
  }
  return shortestString;
};
console.log(minWindow(str1));
