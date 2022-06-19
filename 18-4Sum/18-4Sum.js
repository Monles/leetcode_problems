var fourSum = function (nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);
  let resultArr = [];
  for (i = 0; i < sortedNums.length - 3; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    for (j = i + 1; j < sortedNums.length - 2; j++) {
      if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue;

      let left = j + 1;
      let right = sortedNums.length - 1;
      while (left < right) {
        const sum =
          sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          resultArr.push([
            sortedNums[i],
            sortedNums[j],
            sortedNums[left],
            sortedNums[right],
          ]);
          while (left < right && sortedNums[left] === sortedNums[left + 1])
            left++;
          while (left < right && sortedNums[right] === sortedNums[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
      }
    }
  }
  return resultArr;
};
