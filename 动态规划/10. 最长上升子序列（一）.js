// 描述
// 给定一个长度为 n 的数组 arr，求它的最长严格上升子序列的长度。
// 所谓子序列，指一个数组删掉一些数（也可以不删）之后，形成的新数组。例如 [1,5,3,7,3] 数组，其子序列有：[1,3,3]、[7] 等。但 [1,6]、[1,3,5] 则不是它的子序列。
// 我们定义一个序列是 严格上升 的，当且仅当该序列不存在两个下标
// i 和
// j 满足
// i<j 且
// arr
// i
//  ≥arr
// j
// 输入：
// [6,3,1,5,2,3,7]
// 复制
// 返回值：
// 4
// 复制
// 说明：
// 该数组最长上升子序列为 [1,2,3,7] ，长度为4

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 给定数组的最长严格上升子序列的长度。
 * @param arr int整型一维数组 给定的数组
 * @return int整型
 */
function LIS(arr) {
  if (!arr.length) return 0;
  const dp = new Array(arr.length);
  dp[0] = 1;
  let maxLen = 1;
  for (let i = 1; i < arr.length; i++) {
    let temp = 1;
    let res = 1;
    for (let j = 0; j < i; j++) {
      temp = arr[i] > arr[j] ? dp[j] + 1 : 1;
      res = Math.max(res, temp);
    }
    dp[i] = res;
    maxLen = Math.max(maxLen, dp[i]);
  }
  return maxLen;
}
module.exports = {
  LIS: LIS,
};
