function combinationSum(candidates, target) {
  let result = [];

  const dfs = (curCandidates, curTarget, value) => {
    if (curTarget == 0) result.push(value);
    if (curTarget <= 0) return;
    for (let i = 0; i < curTarget.length; i++) {
      dfs(curCandidates.slice(i), curTarget - curCandidates[i], [
        ...value,
        curCandidates[i],
      ]);
    }
  };
  dfs(candidates, target, []);
  return result;
}
