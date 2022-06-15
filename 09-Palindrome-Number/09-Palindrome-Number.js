var isPalindrome = function (x) {
  const s = x.toString();
  if (s.length === 1) {
    return true;
  }
  const start = s[0];
  const end = s[s.length - 1];
  if (start !== end) {
    return false;
  }
  if (s.length === 2) {
    return true;
  }
  const subStr = s.substring(1, s.length - 1);
  return isPalindrome(subStr);
};
