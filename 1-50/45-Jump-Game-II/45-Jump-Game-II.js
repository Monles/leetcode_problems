var jump = function (nums) {
  let jumpRequired = 0,
    currentJumpEnd = 0,
    farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    farthest = Math.max(farthest, nums[i] + i);
    if (i == currentJumpEnd) {
      jumpRequired++;
      currentJumpEnd = farthest;
    }
  }
  return jumpRequired;
};
