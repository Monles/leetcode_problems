var isPalindrome = function (x) {
  const s = x.toString();
  if (s.length === 1) return true;

  const start = x[0];
  const end = x[s.length - 1];

  if (start !== end) return false;
  if (s.length === 2) return true;

  const substr = s.substring(1, s.length - 1);
  return isPalindrome(substr);k
};
