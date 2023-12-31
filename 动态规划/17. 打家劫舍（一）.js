// 描述
// 你是一个经验丰富的小偷，准备偷沿街的一排房间，每个房间都存有一定的现金，为
// 了防止被发现，你不能偷相邻的两家，即，如果偷了第一家，就不能再偷第二家；
// 如果偷了第二家，那么就不能偷第一家和第三家。
// 给定一个整数数组nums，数组中的元素表示每个房间存有的现金数额，请你计算在
// 不被发现的前提下最多的偷窃金额。
// 输入：
// [1,2,3,4]
// 复制
// 返回值：
// 6
// 复制
// 说明：
// 最优方案是偷第 2，4 个房间  
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */

// 简单dp，对于每个房间只有偷不偷两种，你是一个小偷，你也不知道后面有多少。

// 当我们访问房间i时，我们只有两种选择：偷i，并且拿起i-2及以前所有的财富；不偷
// i，拿起i-1及以前所有的财富。我们可以保证我们访问第i间房间时，拿到的钱是最多的。

// 这就很好解决了，用一个数组存储累加的数就好，最后最多的财富值就是数组最后一项的值。

function rob( nums ) {
    const dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++){
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
    }
    console.log(dp)
    return dp[nums.length-1]
}
module.exports = {
    rob : rob
};