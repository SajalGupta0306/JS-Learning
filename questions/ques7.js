// Given a string s, return the number of palindromic substrings in it.

const str1 = "Sajal";

const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return reversed.toLowerCase() === str.toLowerCase();
};
const maxPalindromes = (str1 = "") => {
  let numberOfPalindromes = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = i; j < str1.length; j++) {
      const testString = str1.substr(i, j - i + 1);
      if (isPalindrome(testString)) {
        numberOfPalindromes += 1;
      }
    }
  }
  return numberOfPalindromes;
};
console.log(maxPalindromes(str1));
