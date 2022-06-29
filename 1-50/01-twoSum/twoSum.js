// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
  const comp = new map();
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
  return [];
}
const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
