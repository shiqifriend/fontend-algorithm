// 描述
// 给定一个 n 行 m 列矩阵 matrix ，矩阵内所有数均为非负整数。 你需要在矩阵中找到一条最长路径，使这条路径上的元素是递增的。并输出这条最长路径的长度。
// 这个路径必须满足以下条件：

// 1. 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外。
// 2. 你不能走重复的单元格。即每个格子最多只能走一次。
// 例如：当输入为[[1,2,3],[4,5,6],[7,8,9]]时，对应的输出为5，
// 其中的一条最长递增路径如下图所示：

// 示例1
// 输入：
// [[1,2,3],[4,5,6],[7,8,9]]
// 复制
// 返回值：
// 5
// 说明：
// 1->2->3->6->9即可。当然这种递增路径不是唯一的。  

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 递增路径的最大长度
 * @param matrix int整型二维数组 描述矩阵的每个数
 * @return int整型
 */
function solve( matrix ) {
    const rowLen = matrix.length
    const colLen = matrix[0].length
    const dp = Array.from({length:rowLen}, ()=>new Array(colLen).fill(0))
    console.log(dp)
    let ans = 0
    const dfs = (i, j, lastNum) => {
        if(i<0 || j<0 || i>=rowLen || j>=colLen || matrix[i][j] <= lastNum) return 0
        if(dp[i][j]) return dp[i][j]
        const top = dfs(i-1, j, matrix[i][j]) + 1
        const bottom = dfs(i+1, j, matrix[i][j]) + 1
        const left = dfs(i, j-1, matrix[i][j]) + 1
        const right = dfs(i, j+1, matrix[i][j]) + 1
        dp[i][j] = Math.max(top, bottom, left, right)
        return dp[i][j]
    }
    for(let i = 0; i < rowLen; i++) {
        for(let j = 0; j < colLen; j++) {
            ans = Math.max(ans, dfs(i, j, -1))
        }
    }
    return ans
}
module.exports = {
    solve : solve
};