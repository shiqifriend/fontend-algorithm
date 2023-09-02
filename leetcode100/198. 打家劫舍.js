/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length <= 1) return nums[0]
    const dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++) {
        let temp = dp[1]
        dp[1] = Math.max(dp[1], dp[0] + nums[i])
        dp[0] = temp
    }
    return dp[1]
};