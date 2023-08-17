/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < len - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;
    let target = -nums[i];
    while (left < right) {
      if (nums[left] + nums[right] > target) right--;
      else if (nums[left] + nums[right] < target) left++;
      else {
        res.push([nums[i], nums[left], nums[right]]);
        while (left + 1 < right && nums[left] === nums[left + 1]) left++;
        while (left < right - 1 && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
};
