const line = "Welcome to my world";

function reverseStringWords(value) {
  const lineArr = value.split(" ");
  const reverseArr = lineArr.reverse();
  return reverseArr.join(" ");
}

console.log(reverseStringWords(line));
