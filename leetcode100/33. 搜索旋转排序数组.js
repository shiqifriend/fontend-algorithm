/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while(left <= right) {
        let middle = (left + right) >> 1
        if(nums[middle] === target) return middle
        if(nums[middle] >= nums[left]) {
            if(nums[middle] >= target && nums[left] <= target) right = middle - 1
            else left = middle + 1
        } else {
            if(nums[middle] <= target && nums[right] >= target) left = middle + 1
            else right = middle - 1
        }
    }
    return -1
};