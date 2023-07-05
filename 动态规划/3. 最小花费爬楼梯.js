// 描述
// 给定一个整数数组 cost \cost  ，其中 cost[i]\cost[i]  是从楼梯第i \i 个台阶向上爬需要支付的费用，下标从0开始。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

// 请你计算并返回达到楼梯顶部的最低花费。
// 示例1
// 输入：
// [2,5,20]
// 返回值：
// 5
// 说明：
// 你将从下标为1的台阶开始，支付5 ，向上爬两个台阶，到达楼梯顶部。总花费为5 
// 示例2
// 输入：
// [1,100,1,1,1,90,1,1,80,1]
// 返回值：
// 6
// 说明：
// 你将从下标为 0 的台阶开始。
// 1.支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
// 2.支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
// 3.支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
// 4.支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
// 5.支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
// 6.支付 1 ，向上爬一个台阶，到达楼梯顶部。
// 总花费为 6 。   

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param cost int整型一维数组 
 * @return int整型
 */
function minCostClimbingStairs( cost ) {
    const dp = []
    dp[0] = 0
    dp[1] = 0
    let temp
    for(let i = 2; i<=cost.length; i++){
        temp = Math.min(dp[0]+cost[i-1], dp[1]+cost[i-2])
        dp[1] = dp[0]
        dp[0] = temp
    }
    return dp[0]
}

function minCostClimbingStairs( cost ) {
    // write code here
    const dp = [];
    dp[0] = 0; dp[1] = 0;
    for(let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
    }
    return dp[cost.length];
}

module.exports = {
    minCostClimbingStairs : minCostClimbingStairs
};