function combinationSum(candidates, target) {
  let res = [];

  const dfs = (curCandidates, curTarget, value) => {
    if (curTarget == 0) res.push(value);
    if (curTarget <= 0) return;
    for (let g = 0; g < curCandidates.length; g++) {
      dfs(curCandidates.slice(g), curTarget - curCandidates[g], [
        ...value,
        curCandidates[g],
      ]);
    }
  };
  dfs(candidates, target, []);
  return res;
}
