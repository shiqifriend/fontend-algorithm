/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {}
    const mid = nums.length >> 1
    for(const num of nums) {
        obj[num] = obj[num] ? obj[num] + 1 : 1
        if(obj[num] > mid) return num
    }
};