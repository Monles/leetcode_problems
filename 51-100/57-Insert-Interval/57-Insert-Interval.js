var insert = function (intervals, newInterval) {
  let overlapping = [];
  let noOverlapping = [];

  let lowestToMerge = Number.MAX_SAFE_INTEGER;
  let highestToMerge = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < intervals.length; i++) {
    if (doRangesIntersect(intervals[i], newInterval)) {
      overlapping.push(intervals[i]);
      lowestToMerge = Math.min(lowestToMerge, newInterval[0], intervals[i][0]);
      highestToMerge = Math.max(
        highestToMerge,
        newInterval[1],
        intervals[i][1]
      );
    } else {
      noOverlapping.push(intervals[i]);
    }
  }
  if (!overlapping.length) {
    return [...noOverlapping, newInterval].sort(function (a, b) {
      return a[0] - b[0];
    });
  } else {
    return [...noOverlapping, [lowestToMerge, highestToMerge]].sort(function (
      a,
      b
    ) {
      return a[0] - b[0];
    });
  }
};

function doRangesIntersect(a, b) {
  let [lower, higher] = [a, b].sort(function (a, b) {
    return a[0] - b[0];
  });

  if (lower[0] <= higher[0] && lower[1] >= higher[0]) {
    return true;
  }
  return false;
}
