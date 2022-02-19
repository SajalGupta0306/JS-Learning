// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]; // aet
const hash = {};
const outputArr = [];
strs.forEach((str) => {
  const sortedStr = str.split("").sort().join("");
  if (!hash[sortedStr]) {
    hash[sortedStr] = [str];
  } else {
    hash[sortedStr].push(str);
  }
});

const keys = Object.keys(hash);
keys.forEach((key) => {
  outputArr.push(hash[key]);
});
console.log(outputArr);
