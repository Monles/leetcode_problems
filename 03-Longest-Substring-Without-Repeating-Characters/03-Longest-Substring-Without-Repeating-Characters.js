//Example
//Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let begin = 0;
  let set = new Set();

  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[begin]);
      begin = begin + 1;
    }
    set.add(s[end]);
    max = Math.max(max, end - begin + 1);
  }
  return max;
};
