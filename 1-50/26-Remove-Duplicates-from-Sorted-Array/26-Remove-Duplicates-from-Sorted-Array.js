var removeDuplicates = function (nums) {
  if (nums.length < 1) return;
  let ptr = 1,
    ptrOut = 1,
    previous = nums[0];

  while (ptr < nums.length) {
    if (nums[ptr] !== previous) {
      nums[ptrOut] = nums[ptr];
      ptrOut++;
    }
    previous = nums[ptr];
    ptr++;
  }
  return ptrOut;
};
