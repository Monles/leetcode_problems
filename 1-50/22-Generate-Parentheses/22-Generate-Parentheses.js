var generateParenthesis = function (n) {
  let result = [];
  const generate = (left, right, str) => {
    if (left === n && right === n) {
      result.push(str);
      return;
    }

    if (left < n) {
      generate(left + 1, right, `${str}(`);
    }
    if (left > right && right < n) {
      generate(left, right + 1, `${str})`);
    }
  };
  generate(0, 0, "");
  return result;
};
