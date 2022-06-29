var searchInsert = function (nums, target) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    let cur = nums[i];
    if (cur > target) {
      return i;
    }
  }
  return length;
};
