// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward.  Alphanumeric characters include letters and numbers.

var isPalindrome = function (s) {
  if (s === "" || s === " ") {
    return true;
  }
  let stringWithoutSpChar = s.replace(/[^a-zA-Z0-9]/g, "");
  let reverseString = stringWithoutSpChar.split("").reverse().join("");
  if (stringWithoutSpChar.toLowerCase() === reverseString.toLowerCase()) {
    return true;
  }
  return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
