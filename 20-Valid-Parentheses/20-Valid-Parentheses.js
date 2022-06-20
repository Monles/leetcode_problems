var isValid = function (s) {
  if (s.length == 0 || s.length % 2 != 0) {
    return false;
  }
  const closingParentheses = Object.freeze({
    "(": ")",
    "[": "]",
    "{": "}",
  });

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in closingParentheses) {
      stack.push(s[i]);
    } else if (s[i] !== closingParentheses[stack.pop()]) {
      return false;
    }
  }
  return stack.length == 0;
};
