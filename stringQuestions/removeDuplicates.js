// Remove String Duplicate

// using a 2 pointer approach
// in beginning, read and write pointer are in same.
// if matching character found in final result, only read moves and write stays same
// and the value in write pointer is replaced with latest read pointer

// TIme complexity - O(n) (one loop)
// Space - O(n) sinc we are storing n characters in a set

const removeStringDuplicates = (str) => {
  const finalStr = new Set([])
  let readPtr = 0
  let writePtr = 0
  const len = str.length

  while (readPtr < len) {
    if (!finalStr.has(str[readPtr])) {
      finalStr.add(str[readPtr])
      str = str.slice(0, writePtr) + str[readPtr] + str.slice(writePtr + 1)
      console.log(str)
      writePtr++
    }
    readPtr++
  }
  //  return any of the below statements
  // return Array.from(finalStr).join('')
  // return [...finalStr].join('')
  return str.slice(0, writePtr)
}

console.log(removeStringDuplicates("Hello World"))
