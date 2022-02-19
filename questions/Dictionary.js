// const WordDictionary = function () {
//   this.map = new Map();
// };

// WordDictionary.prototype.addWord = function (word) {
//   const wordLength = word.length;
//   if (!this.map.has(wordLength)) {
//     this.map.set(wordLength, [word]);
//   } else {
//     this.map.get(wordLength).push(word);
//   }
// };

// WordDictionary.prototype.search = function (word) {
//   const wordLength = word.length;
//   if (!this.map.get(wordLength)) {
//     return false;
//   }
//   const wordLengthArr = this.map.get(wordLength);
//   for (let i = 0; i < wordLengthArr.length; i++) {
//     if (wordLengthArr[i].toLowerCase() === word.toLowerCase()) {
//       return true;
//     }
//   }
//   return false;
// };

// WordDictionary.prototype.search2 = function (word) {
//   if (!this.map.get(word.length)) return false;
//   let temp = [...this.map.get(word.length)];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === ".") continue;
//     for (let j = 0; j < temp.length; j++) {
//       if (word[i] !== temp[j][i]) temp.splice(j, 1), j--;
//     }
//   }
//   return temp.length;
// };

// const wordDictionary = new WordDictionary();

// wordDictionary.addWord("welcome");
// wordDictionary.addWord("tesla");
// console.log(wordDictionary.search("welcome"));
// console.log(wordDictionary.search("TESLA"));
// console.log(wordDictionary.search2("TESLA"));

var WordDictionary = function () {
  this.m = new Map(); // (length x, list of strings of length x)
  // T.C: O(1)
};

WordDictionary.prototype.addWord = function (word) {
  let len = word.length;
  if (this.m.has(len)) {
    this.m.get(len).push(word);
  } else {
    this.m.set(len, [word]);
  }
  // T.C: O(1)
};

WordDictionary.prototype.search = function (word) {
  let len = word.length;
  if (!this.m.has(len)) {
    return false;
  }
  let words = this.m.get(len);
  for (let i = 0; i < words.length; i++) {
    let match = true;
    for (let j = 0; j < words[i].length; j++) {
      if (
        word[j] !== "." &&
        word[j].toLowerCase() !== words[i][j].toLowerCase()
      ) {
        match = false;
        break;
      }
    }
    if (match) {
      return true;
    }
  }
  return false;
  // T.C: O(k*N), where k = length of word, N = # of words
};

const wordDictionary = new WordDictionary();

wordDictionary.addWord("welcome");
wordDictionary.addWord("tesla");
console.log(wordDictionary.search("welcome"));
console.log(wordDictionary.search("...LA"));
