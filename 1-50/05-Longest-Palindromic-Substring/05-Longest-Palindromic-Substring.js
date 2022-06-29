// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

var longestPalindrome = function (s) {
  if (s.length < 3) return s;
  let max = "";

  for (let i = 0; i < s.length; i++) {
    let left = helper(i, i, s);
    let right = helper(i, i + 1, s);
    let currMax = left.lenght >= right.length ? left : right;
    max = currMax.length >= max.length ? currMax : max;
  }
  return max;
};

function helper(left, right, s) {
  let curr = "";
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    curr = s.substring(left, right + 1);
    left -= 1;
    right += 1;
  }
  return curr;
}
