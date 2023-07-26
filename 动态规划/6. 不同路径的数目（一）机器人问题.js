// 描述
// 一个机器人在m×n大小的地图的左上角（起点）。
// 机器人每次可以向下或向右移动。机器人要到达地图的右下角（终点）。
// 可以有多少种不同的路径从起点走到终点？

// 备注：m和n小于等于100,并保证计算结果在int范围内
// 输入：
// 2,1
// 复制
// 返回值：
// 1

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param m int整型 
 * @param n int整型 
 * @return int整型
 */
function uniquePaths( m ,  n ) {
    const dp = new Array(m).fill(0).map(()=>new Array(n).fill(0))
    
    for(let i = 0; i < m; i++)dp[i][0] = 1
    for(let i = 0; i < n; i++)dp[0][i] = 1
        
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++) {
            if(!dp[i][j]) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    return dp[m-1][n-1]
}
module.exports = {
    uniquePaths : uniquePaths
};