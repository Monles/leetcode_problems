var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let r = "";
  for (let i = 0; i < str[0].length; i++) {
    for (let j = 0; j < str[j][i].length; j++) {
      if (str[0][i] !== str[j][i]) return r;
    }
    r += str[0][i];
  }
  return r;
};
