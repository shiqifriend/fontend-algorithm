/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [1,1]
    for(let i = 1; i < n; i++) {
        let temp = dp[1]
        dp[1] = dp[0] + dp[1]
        dp[0] = temp
    }
    return dp[1]
};