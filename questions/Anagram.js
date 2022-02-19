const str1 = "Saajl";
const str2 = "qslaj";

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  const sorted_s1 = s1.split("").sort().join("");
  const sorted_s2 = s2.split("").sort().join("");

  for (i = 0; i < s1.length; i++) {
    if (sorted_s1.charAt(i) !== sorted_s2.charAt(i)) {
      return false;
    }
  }
  return true;
}

if (isAnagram(str1, str2)) {
  console.log("both the strings are anagram to each other");
} else {
  console.log("both the strings are not anagram to each other");
}
