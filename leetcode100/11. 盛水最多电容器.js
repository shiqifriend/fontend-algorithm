/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length;
  let max = 0;
  let left = 0,
    right = len - 1;
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
};
