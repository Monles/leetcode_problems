var findSubstring = function (s, words) {
  let obj = {};
  let arr = [];
  for (const i of words) {
    obj[i] = obj[i] + 1 || 1;
  }

  let length = words[0].length;
  const len = length * words.length;

  for (let j = 0; j < s.length - len + 1; j++) {
    if (obj[s.substring(j, j + length)]) {
      let temp = {};
      let i = j;
      let count = 0;

      while (count < words.length) {
        let str = s.slice(i, i + length);

        temp[str] = temp[str] + 1 || 1;
        if (!obj[str] || temp[str] > obj[str]) break;

        i += length;
        count++;
      }
      if (count === words.length) arr.push(j);
    }
  }
  return arr;
};
