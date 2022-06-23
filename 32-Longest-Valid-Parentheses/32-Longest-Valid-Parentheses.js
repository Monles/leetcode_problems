var longestValidParentheses = function (s) {
  var ts = s.split('');
  var stack = [],
    max = 0;

  ts.forEach(function (t, i) {
    if (t == '(') {
      stack.push(i);
    } else {
      if (stack.length === 0 || ts[stack[stack.length - 1]] == ')') {
        stack.push(i);
      } else {
        stack.pop();
      }
    }
  });

  stack.push(ts.length);
  stack.splice(0, 0, -1);

  for (var i = 0; i < stack.length - 1; i++) {
    var v = stack[i + 1] - stack[i] - 1;
    max = Math.max(max, v);
  }

  return max;
};
