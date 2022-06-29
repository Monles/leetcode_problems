var isMatch = function (s, p) {
  let lp = '';
  let pat = '';
  for (let a of p) {
    if (lp === '*' && a === '*') {
      continue;
    }
    lp = a;
    pat += a;
  }

  p = pat;
  const dp = Array(s.length + 1)
    .fill(0)
    .map(() => Array(p.length + 1).fill(false));
  dp[0][0] = true;
  if (p[0] === '*') {
    dp[0][1] = true;
  }
  for (let si = 1; si <= s.length; si++) {
    for (let pi = 1; pi <= p.length; pi++) {
      const cs = s[si - 1];
      const cp = p[pi - 1];
      if (cs === cp || cp === '?') dp[si][pi] = dp[si - 1][pi - 1];
      if (cp === '*') dp[si][pi] = dp[si - 1][pi] || dp[si][pi - 1];
    }
  }
  return dp[s.length][p.length];
};
