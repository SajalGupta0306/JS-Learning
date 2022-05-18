// https://leetcode.ca/2020-03-26-1578-Minimum-Deletion-Cost-to-Avoid-Repeating-Letters/

{
  /* <p>You are given a string S. Deletion of the K-th letter of S costs C[K]. After deleting a letter, the costs of deleting other letters do not change. For example, for S = "ab" and C = [1, 3], after deleting 'a', deletion of 'b' will still cost 3.</p>
<p>You want to delete some letters from S to obtain a string without two identical letters next to each other. What is the minimum total cost of deletions to achieve such a string?</p>
<p>Write a function:</p>
<blockquote><p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>function solution(S, C);</tt></p></blockquote>
<p>that, given string S and array C of integers, both of length N, returns the minimum cost of all necessary deletions.</p>
<p><b>Examples:</b></p>
<p>1. Given S = "abccbd" and C = [0, 1, 2, 3, 4, 5], the function should return 2. You can delete the first occurrence of 'c' to achieve "abcbd".</p>
<p>2. Given S = "aabbcc" and C = [1, 2, 1, 2, 1, 2], the function should return 3. By deleting all letters with a cost of 1, you can achieve string "abc".</p>
<p>3. Given S = "aaaa" and C = [3, 4, 5, 6], the function should return 12. You need to delete all but one letter 'a', and the lowest cost of deletions is 3+4+5=12.</p>
<p>4. Given S = "ababa" and C = [10, 5, 10, 5, 10], the function should return 0. There is no need to delete any letter.</p>
<p>Write an <b><b>efficient</b></b> algorithm for the following assumptions:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>string S and array C have length equal to N;</li>
<li>N is an integer within the range [<span class="number">1</span>..<span class="number">100,000</span>];</li>
<li>string S consists only of lowercase letters (<tt style="white-space:pre-wrap">a</tt>−<tt style="white-space:pre-wrap">z</tt>);</li>
<li>each element of array C is an integer within the range [<span class="number">0</span>..<span class="number">1,000</span>].</li>
</ul>
</blockquote> */
}

function solution(s, C) {
  let totalCost = 0;
  let prevChar = s.charAt(0);
  let maxCost = C[0];
  let currentTotalCost = C[0];
  for (let i = 1; i < s.length; i++) {
    const char = s.charAt(i);
    const currentCost = C[i];
    if (char === prevChar) {
      maxCost = Math.max(maxCost, currentCost);
      currentTotalCost += currentCost;
    } else {
      totalCost += currentTotalCost - maxCost;
      prevChar = char;
      maxCost = currentCost;
      currentTotalCost = currentCost;
    }
  }
  totalCost += currentTotalCost - maxCost;
  return totalCost;
}
