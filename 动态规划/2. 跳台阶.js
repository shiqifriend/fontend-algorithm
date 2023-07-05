// 描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

// 数据范围：1 \leq n \leq 401≤n≤40
// 要求：时间复杂度：O(n)O(n) ，空间复杂度： O(1)O(1)
// 示例1
// 输入：
// 2
// 返回值：
// 2
// 说明：
// 青蛙要跳上两级台阶有两种跳法，分别是：先跳一级，再跳一级或者直接跳两级。因此答案为2 

function jumpFloor(number)
{
    if(number==1)return 1
    if(number==2)return 2
    let dp = []
    dp[0] = 2
    dp[1] = 1
    let temp
    for(let i = 2; i< number; i++){
        temp = dp[0] + dp[1]
        dp[1] =dp[0]
        dp[0] = temp
    }
    return dp[0]
}
module.exports = {
    jumpFloor : jumpFloor
};