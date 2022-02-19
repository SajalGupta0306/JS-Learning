function permute(s, answer) {
  if (s.length == 0) {
    console.log(answer);
  }

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const left_substr = s.slice(0, i);
    const right_substr = s.slice(i + 1);
    const rest = left_substr + right_substr;
    permute(rest, answer + ch);
  }
}

// Driver Cod"e
const s = "abc";
const answer = "";
permute(s, answer);
