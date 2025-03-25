// number of palindromes in the string

function countTotalPalindromes(str, left, right) {
    let count = 0;
    while (left > 0 && right < str.length && str[left] === str[right]) {
        count++;
        right++;
        left--;
    }
    return count
}

const numberOfPalindromes = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count += countTotalPalindromes(str, i, i); // count odd palindromes like aba
        count += countTotalPalindromes(str, i, i + 1) // count even palndromes like abba
    }
    return count;

}

console.log(numberOfPalindromes("aabbaa"))