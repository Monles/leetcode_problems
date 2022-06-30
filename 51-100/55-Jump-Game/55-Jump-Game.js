var canJump = function (nums) {
  if (nums.length < 2) {
    return true;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i + nums[i] >= nums.length - 1) {
      return true;
    }
    if (nums[i] === 0) {
      return false;
    }

    if (i + nums[i] > i + 1 + nums[i + 1]) {
      nums[i + 1] = nums[i] - 1;
    }
  }
};
