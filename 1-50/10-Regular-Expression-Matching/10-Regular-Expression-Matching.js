var isMatch = function (s, p) {
  if (p.length === 0) return s.length === 0;

  const firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === ".");
  if (p.length >= 2 && p[1] === "*") {
    return (
      isMatch(s, p.subString(2)) || (firstMatch && isMatch(s.subString(1), p))
    );
  } else {
    return firstMatch && isMatch(s.subString(1), p.subString(1));
  }
};
