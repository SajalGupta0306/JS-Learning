const bracketPairs = {
  "[": "]",
  "{": "}",
  "(": ")",
};
const closingBrackets = new Set(Object.values(bracketPairs));

function bracketsAreBalanced(text) {
  const open = [];
  for (const char of text) {
    if (closingBrackets.has(char)) {
      if (char === open[open.length - 1]) {
        open.pop();
      } else {
        return false;
      }
    }
    if (char in bracketPairs) {
      open.push(bracketPairs[char]);
    }
  }
  return open.length === 0;
}

const test = "if (condition) {}";
console.log(bracketsAreBalanced(test));
