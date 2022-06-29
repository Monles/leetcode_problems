let permute = function (nums) {
  let temp = [];
  let final = [];

  function backtrack(temp, nums) {
    if (nums.length === 0) {
      final.push(temp.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      temp.push(nums[i]);
      nums.splice(i, 1);
      backtrack(temp, nums, final);
      nums.splice(i, 0, temp.pop());
    }
  }
  backtrack(temp, nums, final);
  return final;
};
