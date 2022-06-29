var firstMissingPositive = function (nums) {
  if (nums.length === 0) return 1;
  const size = nums.length;
  let seen_one = false;

  nums.forEach((el, ind) => {
    if (el === 1 && !seen_one) {
      seen_one = true;
    } else if (el < 1 || el > size) {
      nums[ind] = 1;
    }
  });

  if (!seen_one) return 1;

  nums.forEach((el) => {
    const ind = Math.abs(el) - 1;
    if (nums[ind] > 0) {
      nums[ind] *= -1;
    }
  });

  for (let i = 0; i < size; i++) {
    if (nums[i] > 0) {
      return ++i;
    }
  }
  return size + 1;
};
console.log(firstMissingPositive([1, 2, 0]));
