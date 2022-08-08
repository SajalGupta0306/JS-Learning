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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// valid parenthesis in Javascript

const validParanthesis = (str) => {
  const stack = [];
  const paranStr = "()[]{}";
  for (const val of str) {
    if (paranStr.indexOf(val) !== -1) {
      stack.push(val);
      const open = stack[stack.length - 2];
      const closed = stack[stack.length - 1];
      if (paranStr.includes(open + closed)) {
        stack.pop();
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};

console.log(validParanthesis("if (condition[) {}"));
