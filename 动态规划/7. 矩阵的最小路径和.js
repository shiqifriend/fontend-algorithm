// 描述
// 给定一个 n * m 的矩阵 a，从左上角开始每次只能向右或者向下走，最后到达右下角的
// 位置，路径上所有的数字累加起来就是路径和，输出所有的路径中最小的路径和。
// 例如：当输入[[1,3,5,9],[8,1,3,4],[5,0,6,1],[8,8,4,0]]时，对应的返回值为12，
// 所选择的最小累加和路径如下图所示：

// 示例1
// 输入：
// [[1,3,5,9],[8,1,3,4],[5,0,6,1],[8,8,4,0]]
// 复制
// 返回值：
// 12

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix int整型二维数组 the matrix
 * @return int整型
 */
function minPathSum(matrix) {
  const dp = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(0));
  dp[0][0] = matrix[0][0];
  for (let j = 1; j < matrix[0].length; j++) {
    dp[0][j] = dp[0][j - 1] + matrix[0][j];
  }
  for (let i = 1; i < matrix.length; i++) {
    dp[i][0] = dp[i - 1][0] + matrix[i][0];
  }
  console.log(dp);
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + matrix[i][j];
    }
  }
  return dp[matrix.length - 1][matrix[0].length - 1];
}
module.exports = {
  minPathSum: minPathSum,
};
