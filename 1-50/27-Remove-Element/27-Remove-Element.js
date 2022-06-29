var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
