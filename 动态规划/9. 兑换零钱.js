// 描述
// 给定数组arr，arr中所有的值都为正整数且不重复。每个值代表一种面值的货币，每种面值的货币可以使用
// 任意张，再给定一个aim，代表要找的钱数，求组成aim的最少货币数。
// 如果无解，请返回-1.
// 输入：
// [5,2,3],20
// 复制
// 返回值：
// 4
// 输入：
// [5,2,3],0
// 复制
// 返回值：
// 0

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 最少货币数
 * @param arr int整型一维数组 the array
 * @param aim int整型 the target
 * @return int整型
 */
function minMoney( arr ,  aim ) {
    const dp = new Array(aim+1)
    for(let i=1; i <= aim; i++) dp[i] = Infinity
    dp[0] = 0
    //dp[i]表示钱数为i时的最少货币数
    for(let i=1; i<=aim; i++){
        for(let j =0; j < arr.length; j++){
            if(arr[j] <= i){
                dp[i] = Math.min(dp[i], dp[i-arr[j]]+1)
            }
        }
    }
    return dp[aim] >aim ? -1 : dp[aim]
}
module.exports = {
    minMoney : minMoney
};