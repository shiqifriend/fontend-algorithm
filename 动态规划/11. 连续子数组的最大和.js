// 描述
// 输入一个长度为n的整型数组array，数组中的一个或连续多个整数组成
// 一个子数组，子数组最小长度为1。求所有子数组的和的最大值。
// 输入：
// [1,-2,3,10,-4,7,2,-5]
// 复制
// 返回值：
// 18
// 复制
// 说明：
// 经分析可知，输入数组的子数组[3,10,-4,7,2]可以求得最大和为18

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型
 */

// 思路：动态规划求解，将问题变成数个易求解的子问题，再将子问题放到全局比较。
// 子问题：以数组中序号为i的数作为连续子数组的最后一个数时，得到的最大和dp[i]。
// 只需要考虑相比于i-1的情况的变化。如果dp[i-1]是负数，反而会让和变小，不如
// 不加；dp[i-1]是正数则加上array[i]。无论如何，array[i]是肯定要的。
// 初始值：dp[0] = array[0]
// 状态转移方程：dp[i] = max(dp[i-1]+array[i],array[i])
// 知道每种子问题的解之后，放到全局比较，同样是选出最大的。这里用res临时存储，遇到更大的就更新。
function FindGreatestSumOfSubArray(array) {
  let max = array[0];
  let dp = array[0];
  for (let i = 1; i < array.length; i++) {
    dp = Math.max(dp + array[i], array[i]);
    max = Math.max(dp, max);
  }
  return max;
}
module.exports = {
  FindGreatestSumOfSubArray: FindGreatestSumOfSubArray,
};
