var combinationSum2 = function (candidates, target) {
  const res = [],
    path = { s: 0, p: [] };
  const backtrack = (curr, c, t, used) => {
    if (path.s === t) {
      res.push([...path.p]);
      return;
    } else if (path.s > t) {
      return;
    }
    for (let i = curr; i < c.length; i++) {
      if (i > 0 && c[i] === c[i - 1] && !used[i - 1]) {
        continue;
      }
      path.s += c[i];
      path.p.push(c[i]);
      used[i] = true;
      backtrack(i + 1, c, t, used);
      path.s -= c[i];
      path.p.pop();
      used[i] = false;
    }
  };

  candidates.sort((i1, i2) => i1 - i2);

  backtrack(0, candidates, target, []);
  return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
